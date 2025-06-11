import { getOrders } from "@/utils/service";

const OrderTable = async () => {
  const orders = await getOrders();


  const getColor = (status:string)=>{
    switch(status){
      case "Shipped": return "bg-blue-600";
      case "Delivered": return "bg-green-600";
      case "Processing": return "bg-yellow-400";
      default: return "bg-red-600";
    }
  };

  return (
    <div className="max-sm:w-[90vw] overflow-x-auto">
      <table className="min-w-full divide-y divide-zinc-200 bg-white shadow-md rounded-md mt-6">
        <thead className="bg-zinc-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-800 uppercase tracking-wider">
            #</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-800 uppercase tracking-wider">Sipariş Tarihi</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-800 uppercase tracking-wider">Ürün Sayısı</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-800 uppercase tracking-wider">Toplam Fiyat</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-800 uppercase tracking-wider">Adres</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-zinc-800 uppercase tracking-wider">Durum</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-zinc-200">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-zinc-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-800">{order.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-800">
                {new Date(order.order_date).toLocaleDateString("tr", {
                  day: "2-digit",
                  month: "long",
                  year: "2-digit",
                })}
              </td>
              <td className="px-6 py-4 text-sm text-zinc-800">
                {order.items.reduce((acc, item) => acc + item.quantity, 0)}
              </td>
              <td className="px-6 py-4 text-sm text-green-600 font-semibold">
                {order.total_price.toFixed(2)}₺
              </td>
              <td className="px-6 py-4 text-sm text-zinc-800">
                {order.shipping_address.city}
              </td>
              <td className="px-6 py-4 text-sm">
                <span 
                className={`${getColor(order.status)} inline-block bg-blue-100 text-white px-2 py-1 rounded-full text-xs font-medium`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
