export function canSelectSeat(seat) {
  return seat.status === 'AVAILABLE'
}

export function calculateSeatTotal(seats) {
  return seats.reduce((total, seat) => total + seat.price, 0)
}

export function shouldIssueTicket(status) {
  return status === 'SUCCESS'
}

export function paymentMessage(status) {
  if (status === 'SUCCESS') return 'Thanh toán thành công. Vé đã được tạo.'
  if (status === 'FAILED') return 'Thanh toán thất bại. Vé chưa được tạo.'
  return 'Đơn đã hết hạn và không thể thanh toán.'
}
