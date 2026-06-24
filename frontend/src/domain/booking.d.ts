export type SeatStatus = 'AVAILABLE' | 'HELD' | 'SOLD' | 'BLOCKED'
export type PaymentStatus = 'SUCCESS' | 'FAILED' | 'EXPIRED'

export interface Seat {
  id: string
  code: string
  price: number
  status: SeatStatus
}

export function canSelectSeat(seat: Seat): boolean
export function calculateSeatTotal(seats: Seat[]): number
export function shouldIssueTicket(status: PaymentStatus): boolean
export function paymentMessage(status: PaymentStatus): string
