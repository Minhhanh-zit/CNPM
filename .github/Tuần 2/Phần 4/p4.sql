CREATE TABLE Users (
    id BIGINT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20),
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME
);

CREATE TABLE Movies (
    id BIGINT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    genre VARCHAR(100),
    duration_minutes INT NOT NULL,
    release_date DATE,
    poster_url VARCHAR(500),
    trailer_url VARCHAR(500),
    age_rating VARCHAR(20),
    status VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME
);

CREATE TABLE Cinemas (
    id BIGINT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    city VARCHAR(100),
    phone VARCHAR(20),
    status VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME
);

CREATE TABLE Rooms (
    id BIGINT PRIMARY KEY,
    cinema_id BIGINT NOT NULL,
    name VARCHAR(100) NOT NULL,
    room_type VARCHAR(50),
    total_seats INT NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_rooms_cinemas
        FOREIGN KEY (cinema_id) REFERENCES Cinemas(id)
);

CREATE TABLE Seats (
    id BIGINT PRIMARY KEY,
    room_id BIGINT NOT NULL,
    seat_row VARCHAR(10) NOT NULL,
    seat_number INT NOT NULL,
    seat_code VARCHAR(20) NOT NULL,
    seat_type VARCHAR(30) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_seats_rooms
        FOREIGN KEY (room_id) REFERENCES Rooms(id),
    CONSTRAINT uq_seats_room_code
        UNIQUE (room_id, seat_code)
);

CREATE TABLE Showtimes (
    id BIGINT PRIMARY KEY,
    movie_id BIGINT NOT NULL,
    room_id BIGINT NOT NULL,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    base_price DECIMAL(12,2) NOT NULL,
    sale_open_time DATETIME,
    status VARCHAR(30) NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_showtimes_movies
        FOREIGN KEY (movie_id) REFERENCES Movies(id),
    CONSTRAINT fk_showtimes_rooms
        FOREIGN KEY (room_id) REFERENCES Rooms(id)
);

CREATE TABLE ShowtimeSeats (
    id BIGINT PRIMARY KEY,
    showtime_id BIGINT NOT NULL,
    seat_id BIGINT NOT NULL,
    status VARCHAR(20) NOT NULL,
    price_amount DECIMAL(12,2) NOT NULL,
    held_by_user_id BIGINT,
    held_until DATETIME,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_showtime_seats_showtimes
        FOREIGN KEY (showtime_id) REFERENCES Showtimes(id),
    CONSTRAINT fk_showtime_seats_seats
        FOREIGN KEY (seat_id) REFERENCES Seats(id),
    CONSTRAINT fk_showtime_seats_users
        FOREIGN KEY (held_by_user_id) REFERENCES Users(id),
    CONSTRAINT uq_showtime_seat
        UNIQUE (showtime_id, seat_id)
);

CREATE TABLE BookingOrders (
    id BIGINT PRIMARY KEY,
    order_code VARCHAR(50) NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    showtime_id BIGINT NOT NULL,
    total_amount DECIMAL(12,2) NOT NULL,
    status VARCHAR(30) NOT NULL,
    expires_at DATETIME NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_booking_orders_users
        FOREIGN KEY (user_id) REFERENCES Users(id),
    CONSTRAINT fk_booking_orders_showtimes
        FOREIGN KEY (showtime_id) REFERENCES Showtimes(id)
);

CREATE TABLE Tickets (
    id BIGINT PRIMARY KEY,
    ticket_code VARCHAR(50) NOT NULL UNIQUE,
    booking_order_id BIGINT NOT NULL,
    showtime_seat_id BIGINT NOT NULL UNIQUE,
    user_id BIGINT NOT NULL,
    price_amount DECIMAL(12,2) NOT NULL,
    qr_code VARCHAR(500),
    status VARCHAR(30) NOT NULL,
    issued_at DATETIME,
    checked_in_at DATETIME,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_tickets_booking_orders
        FOREIGN KEY (booking_order_id) REFERENCES BookingOrders(id),
    CONSTRAINT fk_tickets_showtime_seats
        FOREIGN KEY (showtime_seat_id) REFERENCES ShowtimeSeats(id),
    CONSTRAINT fk_tickets_users
        FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Payments (
    id BIGINT PRIMARY KEY,
    booking_order_id BIGINT NOT NULL,
    payment_code VARCHAR(100) NOT NULL UNIQUE,
    amount DECIMAL(12,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL,
    paid_at DATETIME,
    created_at DATETIME NOT NULL,
    updated_at DATETIME,
    CONSTRAINT fk_payments_booking_orders
        FOREIGN KEY (booking_order_id) REFERENCES BookingOrders(id)
);
