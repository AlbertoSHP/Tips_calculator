import { formatCurrency } from "../helpers"
import type { MenuItem, OrderItem } from "../types"

interface OrderContentProps {
    order: OrderItem[]
    removeFromOrder: (id: MenuItem['id']) => void
}

const OrderContent = ({ order, removeFromOrder }: OrderContentProps) => {
  return (
    <div>
      <h2 className='font-black text-4xl'>Order</h2>
      <div className="space-y-3 mt-10">
        {
            order.map(item => (
                <div className="flex justify-between items-center border-gray-200 border-t py-5" key={item.id}>
                    <div>
                        <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                        <p className="font-black">
                            Quantity: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                        </p>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white h-8 w-8 rounded-4xl font-bold" onClick={() => removeFromOrder(item.id)}>
                        X
                    </button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default OrderContent
