1. CreateBookingRequest.java
package com.cinehunt.dto.booking;

import lombok.Data;
import java.util.List;

@Data
public class CreateBookingRequest {
    private List<Integer> holdIds;
}
2. BookingResponse.java
package com.cinehunt.dto.booking;

import lombok.Builder;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Builder
public class BookingResponse {

    private Integer bookingId;

    private String bookingCode;

    private Integer showtimeId;

    private BigDecimal totalAmount;

    private String status;

    private LocalDateTime expiredAt;
}
3. BookingOrderRepository.java
package com.cinehunt.repository;

import com.cinehunt.entity.BookingOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface BookingOrderRepository
        extends JpaRepository<BookingOrder,Integer> {

    List<BookingOrder> findByStatusAndExpiredAtBefore(
            String status,
            LocalDateTime time
    );
}
4. BookingDetailRepository.java
package com.cinehunt.repository;

import com.cinehunt.entity.BookingDetail;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingDetailRepository
        extends JpaRepository<BookingDetail,Integer> {
}
5. SeatHoldRepository.java
package com.cinehunt.repository;

import com.cinehunt.entity.SeatHold;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDateTime;
import java.util.List;

public interface SeatHoldRepository
        extends JpaRepository<SeatHold,Integer> {

    List<SeatHold> findByHoldIdIn(List<Integer> holdIds);

    List<SeatHold> findByStatusAndExpiredAtBefore(
            String status,
            LocalDateTime time
    );
}
6. ShowtimeSeatRepository.java
package com.cinehunt.repository;

import com.cinehunt.entity.ShowtimeSeat;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowtimeSeatRepository
        extends JpaRepository<ShowtimeSeat,Integer> {
}
7. BookingService.java
package com.cinehunt.service;

import com.cinehunt.dto.booking.BookingResponse;
import com.cinehunt.dto.booking.CreateBookingRequest;
import com.cinehunt.entity.*;
import com.cinehunt.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BookingService {

    private final BookingOrderRepository bookingOrderRepository;
    private final BookingDetailRepository bookingDetailRepository;
    private final SeatHoldRepository seatHoldRepository;
    private final ShowtimeSeatRepository showtimeSeatRepository;

    @Transactional
    public BookingResponse createBooking(
            Integer userId,
            CreateBookingRequest request
    ) {

        List<SeatHold> holds =
                seatHoldRepository.findByHoldIdIn(
                        request.getHoldIds()
                );

        if (holds.isEmpty()) {
            throw new RuntimeException("Không tìm thấy ghế giữ");
        }

        LocalDateTime now = LocalDateTime.now();

        for (SeatHold hold : holds) {

            if (!hold.getUser().getUserId().equals(userId)) {
                throw new RuntimeException(
                        "Ghế không thuộc user"
                );
            }

            if (!"ACTIVE".equals(hold.getStatus())) {
                throw new RuntimeException(
                        "Hold không hợp lệ"
                );
            }

            if (hold.getExpiredAt().isBefore(now)) {
                throw new RuntimeException(
                        "Ghế giữ đã hết hạn"
                );
            }
        }

        Integer showtimeId =
                holds.get(0)
                        .getShowtimeSeat()
                        .getShowtime()
                        .getShowtimeId();

        boolean sameShowtime =
                holds.stream()
                        .allMatch(
                                h ->
                                        h.getShowtimeSeat()
                                                .getShowtime()
                                                .getShowtimeId()
                                                .equals(showtimeId)
                        );

        if (!sameShowtime) {
            throw new RuntimeException(
                    "Ghế phải cùng suất chiếu"
            );
        }

        BigDecimal totalAmount =
                holds.stream()
                        .map(
                                h ->
                                        h.getShowtimeSeat()
                                                .getPrice()
                        )
                        .reduce(
                                BigDecimal.ZERO,
                                BigDecimal::add
                        );

        BookingOrder booking = new BookingOrder();

        booking.setUser(
                holds.get(0).getUser()
        );

        booking.setShowtime(
                holds.get(0)
                        .getShowtimeSeat()
                        .getShowtime()
        );

        booking.setBookingCode(
                "BOOK-" +
                        UUID.randomUUID()
                                .toString()
                                .substring(0,8)
                                .toUpperCase()
        );

        booking.setTotalAmount(totalAmount);

        booking.setFinalAmount(totalAmount);

        booking.setStatus("PENDING_PAYMENT");

        booking.setCreatedAt(now);

        booking.setExpiredAt(
                now.plusMinutes(10)
        );

        bookingOrderRepository.save(booking);

        for (SeatHold hold : holds) {

            BookingDetail detail =
                    new BookingDetail();

            detail.setBooking(booking);

            detail.setShowtimeSeat(
                    hold.getShowtimeSeat()
            );

            detail.setSeatPrice(
                    hold.getShowtimeSeat()
                            .getPrice()
            );

            bookingDetailRepository.save(detail);

            ShowtimeSeat seat =
                    hold.getShowtimeSeat();

            seat.setHoldExpiresAt(
                    booking.getExpiredAt()
            );

            showtimeSeatRepository.save(seat);
        }

        return BookingResponse.builder()
                .bookingId(
                        booking.getBookingId()
                )
                .bookingCode(
                        booking.getBookingCode()
                )
                .showtimeId(showtimeId)
                .totalAmount(totalAmount)
                .status(
                        booking.getStatus()
                )
                .expiredAt(
                        booking.getExpiredAt()
                )
                .build();
    }
}
8. BookingController.java
package com.cinehunt.controller;

import com.cinehunt.dto.booking.CreateBookingRequest;
import com.cinehunt.dto.booking.BookingResponse;
import com.cinehunt.service.BookingService;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@RequiredArgsConstructor
public class BookingController {

    private final BookingService bookingService;

    @PostMapping
    public BookingResponse createBooking(
            @RequestBody CreateBookingRequest request,
            Authentication authentication
    ) {

        Integer userId =
                Integer.valueOf(
                        authentication.getName()
                );

        return bookingService.createBooking(
                userId,
                request
        );
    }
}
9. BookingExpireScheduler.java
package com.cinehunt.scheduler;

import com.cinehunt.entity.*;
import com.cinehunt.repository.*;

import lombok.RequiredArgsConstructor;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.List;

@Component
@RequiredArgsConstructor
public class BookingExpireScheduler {

    private final BookingOrderRepository bookingOrderRepository;
    private final BookingDetailRepository bookingDetailRepository;
    private final ShowtimeSeatRepository showtimeSeatRepository;

    @Scheduled(fixedDelay = 60000)
    public void expireBookings() {

        List<BookingOrder> bookings =
                bookingOrderRepository
                        .findByStatusAndExpiredAtBefore(
                                "PENDING_PAYMENT",
                                LocalDateTime.now()
                        );

        for (BookingOrder booking : bookings) {

            booking.setStatus("EXPIRED");

            bookingOrderRepository.save(booking);

            List<BookingDetail> details =
                    booking.getBookingDetails();

            for (BookingDetail detail : details) {

                ShowtimeSeat seat =
                        detail.getShowtimeSeat();

                seat.setStatus("AVAILABLE");

                seat.setHeldByUser(null);

                seat.setHoldExpiresAt(null);

                showtimeSeatRepository.save(seat);
            }
        }
    }
}
