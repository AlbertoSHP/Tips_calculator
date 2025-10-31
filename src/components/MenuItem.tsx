import type { MenuItem } from "../types"

type MenuItemProps = {
  item: MenuItem,
  addToOrder: (item: MenuItem) => void
}

export default function MenuItem({ item, addToOrder }: MenuItemProps) {
  return (
    <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between" 
    onClick={() => addToOrder(item)}>
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}