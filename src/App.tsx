import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";
import OrderTotal from "./components/OrderTotal";
import TipPercentageForm from "./components/TipPercentageForm";

function App() {
  const { order, addItem, removeItem } = useOrder();  
  
  return (
    <>
      <header className="bg-teal-500 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y Consumos
        </h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black ">Menú</h2>{" "}
          <div className="space-y-1 mt-5">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContents order={order} removeItem={removeItem} />
          <TipPercentageForm/>
          <OrderTotal order={order} />
        </div>
      </main>
    </>
  );
}

export default App;
