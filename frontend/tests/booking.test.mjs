import test from 'node:test'
import assert from 'node:assert/strict'
import {
  calculateSeatTotal,
  canSelectSeat,
  paymentMessage,
  shouldIssueTicket,
} from '../src/domain/booking.mjs'

test('allows selecting an AVAILABLE seat', () => {
  assert.equal(
    canSelectSeat({ id: '1', code: 'A1', price: 90000, status: 'AVAILABLE' }),
    true,
  )
})

test('rejects SOLD, HELD and BLOCKED seats', () => {
  for (const status of ['SOLD', 'HELD', 'BLOCKED']) {
    assert.equal(
      canSelectSeat({ id: status, code: 'A2', price: 90000, status }),
      false,
    )
  }
})

test('calculates selected seat total correctly', () => {
  const total = calculateSeatTotal([
    { id: '1', code: 'A1', price: 90000, status: 'AVAILABLE' },
    { id: '2', code: 'A3', price: 110000, status: 'AVAILABLE' },
  ])

  assert.equal(total, 200000)
})

test('issues ticket only after successful payment', () => {
  assert.equal(shouldIssueTicket('SUCCESS'), true)
  assert.equal(shouldIssueTicket('FAILED'), false)
  assert.equal(shouldIssueTicket('EXPIRED'), false)
})

test('returns distinct payment result messages', () => {
  assert.match(paymentMessage('SUCCESS'), /thành công/i)
  assert.match(paymentMessage('FAILED'), /thất bại/i)
  assert.match(paymentMessage('EXPIRED'), /hết hạn/i)
})
