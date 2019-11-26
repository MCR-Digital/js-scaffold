import { Checkout } from './checkout.js'

describe('Checkout', () => {
  test('scans one A', () => {
    let checkout = new Checkout()
    checkout.scan('A')
    expect(checkout.getTotal()).toBe(50)
  })

  test('scans two As', () => {
    let checkout = new Checkout()
    checkout.scan('A')
    checkout.scan('A')
    expect(checkout.getTotal()).toBe(100)
  })

  test('scans three As', () => {
    let checkout = new Checkout()
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    expect(checkout.getTotal()).toBe(130)
  })

  test('scans six As', () => {
    let checkout = new Checkout()
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    checkout.scan('A')
    expect(checkout.getTotal()).toBe(260)
  })

  test('scans one B', () => {
    let checkout = new Checkout()
    checkout.scan('B')
    expect(checkout.getTotal()).toBe(30)
  })

  test('scans two Bs', () => {
    let checkout = new Checkout()
    checkout.scan('B')
    checkout.scan('B')
    expect(checkout.getTotal()).toBe(45)
  })


  test('scans four Bs', () => {
    let checkout = new Checkout()
    checkout.scan('B')
    checkout.scan('B')
    checkout.scan('B')
    checkout.scan('B')
    expect(checkout.getTotal()).toBe(90)
  })

  test('simple, scans A, B, C, and D', () => {
    let checkout = new Checkout()
    checkout.scan('A')
    expect(checkout.getTotal()).toBe(50)

    checkout.scan('B')
    expect(checkout.getTotal()).toBe(80)

    checkout.scan('C')
    expect(checkout.getTotal()).toBe(100)

    checkout.scan('D')
    expect(checkout.getTotal()).toBe(115)
  })

  test('incremental, scans A, B, A, A, B C, B, C, D, D, D, and C', () => {
    let checkout = new Checkout()
    checkout.scan('A')
    expect(checkout.getTotal()).toBe(50)

    checkout.scan('B')
    expect(checkout.getTotal()).toBe(80)

    checkout.scan('A')
    expect(checkout.getTotal()).toBe(130)

    checkout.scan('A')
    expect(checkout.getTotal()).toBe(160)

    checkout.scan('B')
    expect(checkout.getTotal()).toBe(175)

    checkout.scan('C')
    expect(checkout.getTotal()).toBe(195)

    checkout.scan('B')
    expect(checkout.getTotal()).toBe(225)

    checkout.scan('C')
    expect(checkout.getTotal()).toBe(245)

    checkout.scan('D')
    expect(checkout.getTotal()).toBe(260)

    checkout.scan('D')
    expect(checkout.getTotal()).toBe(275)

    checkout.scan('D')
    expect(checkout.getTotal()).toBe(290)

    checkout.scan('C')
    expect(checkout.getTotal()).toBe(310)
  })
})