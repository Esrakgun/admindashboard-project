import { FC } from "react";
import LineGraph from "../graphics/line-graphs";
import { getOrders } from "@/utils/service";


const SalesChart: FC = async () => {
  // !Api'dan siparişleri getiriyorum:
  const orders = await getOrders();
  // console.log(orders);

  //   const labels = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //   ];

  // todo:Api'dan gelen sipariş verilerine göre Grafik datası oluşturuyorum:
  const data = {
    labels: orders.map((order) => order.order_date),
    datasets: [
      {
        label: "Satış Tutarı",
        // data: [12, 19, 3, 5, 2, 3, 10],
        data: orders.map((order) => order.total_price),
        backgroundColor: "rgba(0,150, 255,0.5)",
        borderColor:"rgba(0,150, 255,1)",
        borderWidth:2,
        fill:true,
        borderDash:[10,5], // [çizgi uzunluğu,boşluk uzunluğu]
        tension:0.4, // Eğrilik için
    },
  ],
};


  return (
    <div className="bg-white rounded-lg p-5 shadow-md">
      <h2 className="subtitle">Satışlar</h2>
      <LineGraph data={data} />
    </div>
  );
};

export default SalesChart;

