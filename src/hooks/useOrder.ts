import { useState } from 'react'
import type { MenuItem, OrderItem } from '../types'

const useOrder = () => {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState<number>(0)

  const addToOrder = (item: MenuItem) => {
    const itemExists = order.find((orderItem) => orderItem.id === item.id)
    if (itemExists) {
      setOrder((prevOrder) => prevOrder.map((orderItem) =>
        orderItem.id === item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ))
      return
    }

    setOrder([...order, { ...item, quantity: 1 }])
  }

  const removeFromOrder = (id: MenuItem['id']) => {
    setOrder(order.filter((i) => i.id !== id))
  }

  const placeOrder = () => {
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addToOrder,
    removeFromOrder,
    placeOrder
  }
}

export default useOrder
