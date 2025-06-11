import { FC } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { notFound } from "next/navigation";
import { getProduct } from "@/utils/service";
import ProductForm from "@/components/products-page/product-form";


interface Props {
  params: Promise<{ slug: string[] }>;
}

const ProductPage: FC<Props> = async ({ params }) => {
  //Todo: URL'deki parametreleri Al:
  const { slug } = await params;
  // console.log(slug);
  //Todo: Düzenlenecek ,Ürünün Bilgilerini Tutacak Değişken:
  let product: Product | null = null;

  // Düzenleme Moodunda isek:
  if (slug[0] === "edit" && slug[1]) {
    try {
      // Düzenlencek Ürünün Bilgilerini Getir:
      product = await getProduct(slug[1]);
      // Ürün Bulunamadıysa :404 Sayfasına yönlendir.
      if (!product) notFound();
    } catch (error) {
      notFound();
    }
  }

  // Sayfa Başlığı:Ürün varsa Düzenle Yoksa Ürün ekle demek istedik..
  const pageTitle = product ? "Ürün Düzenle" : "Ürün Ekle" ;

  return (
    <div className="page container mx-auto ">
      <div className="mb-6 flex items-center justify-between">
         <h1 className="title">{pageTitle}</h1>
           <Link href={"/products"} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors">Geri
          </Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product}/>
      </div>
   </div>
   );
};

export default ProductPage;
