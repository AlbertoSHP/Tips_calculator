import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

interface OrderTotalsProps {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
    const subTotalAmount = useMemo(() => order.reduce((acc, item) => acc + item.price * item.quantity, 0), [order])
    const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip])
    const totalAmount = useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount])

  return (
    <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totals and tips:</h2>
            <p>Subtotal to pay: {''}
                <span className='font-bold'>{formatCurrency(subTotalAmount)}</span>
            </p>

            <p>Tip: {''}
                <span className='font-bold'>{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total to pay: {''}
                <span className='font-bold'>{formatCurrency(totalAmount)}</span>
            </p>
        </div>
        <button
            className="w-full bg-black p-3 uppercase text-white font-bold disabled:opacity-10"
            disabled={order.length === 0}
            onClick={placeOrder}
        >
            Place Order
        </button>
    </>
  )
}

export default OrderTotals
