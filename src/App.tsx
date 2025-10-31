import MenuItem from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import TipPercentageForm from "./components/TipPercentageForm"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addToOrder, removeFromOrder, setTip, tip, placeOrder } = useOrder()

  return (
    <>
     <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Order and Tip Calculator</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map( item => (
              <MenuItem 
                key={item.id}
                item={item}
                addToOrder={addToOrder}
              />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          {
            order.length ? (
              <>
                <OrderContent
                  order={order}
                  removeFromOrder={removeFromOrder}
                />
                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />
                <OrderTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              <p className="text-center">No orders</p>
            )
          }
        </div>
      </main>
    </>
  )
}

export default App
