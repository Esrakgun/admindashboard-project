import { FC } from "react";
import { getProducts } from "@/utils/service";
import DoughnutGraph from "../graphics/doughnut-graphs";

const CategoryChart: FC = async () => {
  // !Api'dan Ürünleri Getir:
  const products = await getProducts();

  //   console.log(products);

  //   const labels = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December"
  //   ];

  // !Ürünlerin Kategorilerine göre (BENZERSİZ) yeni dizi oluşturuduk [...new Set()] metthodu ile;
  const labels = [...new Set(products.map((product) => product.category))];

  //Her Kategoride kaç tane ürün olduğunu hesapla:
  const categoryCounts:Record<string, number> = {};
  products.forEach((product)=>{
    categoryCounts[product.category] = (categoryCounts[product.category] || 0) +1;
  });

//  console.log(categoryCounts);


  // !Ürünlerin Kategorilerine göre grafik verilerini oluştur:
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        // data: [12, 23, 3, 5, 2, 3, 16, 8, 7, 10, 6, 14],
        data:Object.values(categoryCounts),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)", // January
          "rgba(54, 162, 235, 0.2)", // February
          "rgba(255, 206, 86, 0.2)", // March
          "rgba(75, 192, 192, 0.2)", // April
          "rgba(153, 102, 255, 0.2)", // May
          "rgba(255, 159, 64, 0.2)", // June
          "rgba(201, 203, 207, 0.2)", // July
          "rgba(255, 205, 86, 0.2)", // August
          "rgba(54, 162, 100, 0.2)", // September
          "rgba(200, 100, 255, 0.2)", // October
          "rgba(100, 200, 255, 0.2)", // November
          "rgba(255, 100, 200, 0.2)", // December
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 100, 1)",
          "rgba(200, 100, 255, 1)",
          "rgba(100, 200, 255, 1)",
          "rgba(255, 100, 200, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white rounded-lg p-5 shadow-md">
      <h2 className="subtitle mb-5">Kategoriler</h2>
      <DoughnutGraph data={data} />
    </div>
  );
};

export default CategoryChart;
 

   
