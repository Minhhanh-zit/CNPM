import { useMemo, useState } from 'react'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'
import {
  calculateSeatTotal,
  canSelectSeat,
  paymentMessage,
  shouldIssueTicket,
  type PaymentStatus,
  type Seat,
} from './domain/booking.mjs'
import './App.css'

type Movie = {
  id: string
  title: string
  genre: string
  duration: number
  ageRating: string
}

const movies: Movie[] = [
  { id: '1', title: 'CineHunt: Cuộc Săn Vé', genre: 'Hành động', duration: 118, ageRating: 'T16' },
  { id: '2', title: 'Đêm Ở Rạp Chiếu', genre: 'Kinh dị', duration: 102, ageRating: 'T18' },
  { id: '3', title: 'Mùa Hè Của Chúng Ta', genre: 'Tình cảm', duration: 110, ageRating: 'T13' },
]

const initialSeats: Seat[] = [
  { id: '1', code: 'A1', price: 90000, status: 'AVAILABLE' },
  { id: '2', code: 'A2', price: 90000, status: 'SOLD' },
  { id: '3', code: 'A3', price: 110000, status: 'AVAILABLE' },
  { id: '4', code: 'A4', price: 110000, status: 'HELD' },
]

function Layout() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link className="brand" to="/">CineHunt</Link>
        <nav>
          <Link to="/">Trang chủ</Link>
          <Link to="/showtimes/demo/seats">Chọn ghế</Link>
          <Link to="/booking/demo/payment">Thanh toán</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:movieId" element={<MovieDetailPage />} />
          <Route path="/showtimes/:showtimeId/seats" element={<SeatSelectionPage />} />
          <Route path="/booking/:bookingId/payment" element={<PaymentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}

function HomePage() {
  return (
    <section>
      <h1>Phim đang chiếu</h1>
      <p className="lead">Chọn phim, suất chiếu và ghế trong luồng demo CineHunt.</p>
      <div className="movie-grid">
        {movies.map((movie) => (
          <article className="card" key={movie.id}>
            <span className="badge">{movie.ageRating}</span>
            <h2>{movie.title}</h2>
            <p>{movie.genre} · {movie.duration} phút</p>
            <Link className="button" to={`/movies/${movie.id}`}>Xem chi tiết</Link>
          </article>
        ))}
      </div>
    </section>
  )
}

function MovieDetailPage() {
  const { movieId } = useParams()
  const movie = movies.find((item) => item.id === movieId)

  if (!movie) return <NotFoundPage />

  return (
    <section className="card detail-card">
      <span className="badge">{movie.ageRating}</span>
      <h1>{movie.title}</h1>
      <p>Thể loại: {movie.genre}</p>
      <p>Thời lượng: {movie.duration} phút</p>
      <Link className="button" to="/showtimes/demo/seats">Chọn suất chiếu và ghế</Link>
    </section>
  )
}

function SeatSelectionPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const selectedSeats = useMemo(
    () => initialSeats.filter((seat) => selectedIds.includes(seat.id)),
    [selectedIds],
  )

  function toggleSeat(seat: Seat) {
    if (!canSelectSeat(seat)) return
    setSelectedIds((current) =>
      current.includes(seat.id)
        ? current.filter((id) => id !== seat.id)
        : [...current, seat.id],
    )
  }

  return (
    <section>
      <h1>Chọn ghế</h1>
      <p>Ghế SOLD, HELD hoặc BLOCKED không thể được chọn.</p>
      <div className="seat-grid" aria-label="Sơ đồ ghế">
        {initialSeats.map((seat) => {
          const selected = selectedIds.includes(seat.id)
          return (
            <button
              className={`seat ${seat.status.toLowerCase()} ${selected ? 'selected' : ''}`}
              disabled={!canSelectSeat(seat)}
              key={seat.id}
              onClick={() => toggleSeat(seat)}
              type="button"
            >
              {seat.code}
              <small>{seat.status}</small>
            </button>
          )
        })}
      </div>
      <div className="summary">
        <strong>Ghế đã chọn: {selectedSeats.map((seat) => seat.code).join(', ') || 'Chưa chọn'}</strong>
        <strong>Tổng tiền: {calculateSeatTotal(selectedSeats).toLocaleString('vi-VN')}đ</strong>
      </div>
      <Link className="button" to="/booking/demo/payment">Tiếp tục thanh toán</Link>
    </section>
  )
}

function PaymentPage() {
  const [status, setStatus] = useState<PaymentStatus | null>(null)

  return (
    <section className="card detail-card">
      <h1>Thanh toán giả lập</h1>
      <p>Chọn một kết quả để kiểm tra luồng phát hành vé.</p>
      <div className="actions">
        <button type="button" onClick={() => setStatus('SUCCESS')}>Thanh toán thành công</button>
        <button type="button" onClick={() => setStatus('FAILED')}>Thanh toán thất bại</button>
        <button type="button" onClick={() => setStatus('EXPIRED')}>Đơn hết hạn</button>
      </div>
      {status && (
        <div className="result" role="status">
          <p>{paymentMessage(status)}</p>
          <strong>{shouldIssueTicket(status) ? 'Vé QR đã sẵn sàng.' : 'Không phát hành vé.'}</strong>
        </div>
      )}
    </section>
  )
}

function NotFoundPage() {
  return (
    <section className="card detail-card">
      <h1>404 - Không tìm thấy trang</h1>
      <Link className="button" to="/">Quay lại trang chủ</Link>
    </section>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App
