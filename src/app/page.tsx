import icons1 from "@/assets/icon-1.webp";
import icons2 from "@/assets/icon-2.webp";
import icons3 from "@/assets/icon-3.webp";
import icons4 from "@/assets/icon-4.png";
import Card from "@/components/home-page/card";
import CategoryChart from "@/components/home-page/category-chart";
import SalesChart from "@/components/home-page/sales-chart";
import { CardItem } from "@/types";
import { FC } from "react"


const Home: FC = () => {
  const cards: CardItem[] = [
    {
      icon: icons1,
      label: "Toplam Kullanıcı",
      value: 1576
    },
    {
      icon: icons2,
      label: "Toplam Sipariş",
      value: 312
    },
    {
      icon: icons3,
      label: "Toplam Satış",
      value: (54100984).toLocaleString() + "$"
    },
    {
      icon: icons4,
      label: "Toplam Ürün",
      value: 1576
    }
  ]
  return (
    <div className="page w-full">
      <h1 className="title">Admin Paneli</h1>


      <section className="grid lg:grid-cols-4 gap-5 my-10">
        {cards.map((i, key) => (
          <Card key={key} {...i} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5 mty-10">
        <div className="lg:col-span-9"><SalesChart/></div>
        <div className="lg:col-span-5"><CategoryChart/></div>
      </section>
    </div>
  )
}

export default Home;






