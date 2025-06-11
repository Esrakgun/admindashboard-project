import { FC } from "react";
import { Product } from "@/types";
import { categories, inputs } from "@/utils/constants";
import Field from "./field";
import ImagePreview from "./image-preview";
import { createProduct, updateProduct } from "@/utils/service";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";

const handleSubmit = async (formData: FormData) => {
  "use server"; //SERVER ACTION

  const productId = formData.get("id");

  const product = Object.fromEntries(formData.entries()) as unknown as Omit<
    Product,
    "id"
  >;
  console.log(product);

  try {
    // Eğer Düzenlenen Moodaysa Güncelleme İsteği:
    if (productId) {
      await updateProduct(productId as string, product);
    }

    // Oluşturma modundaysak Oluşturma İsteği At:
    if (!productId) {
      await createProduct(product);
    }
    // Kullanıcı Ürünler Sayfasına Yönlerndir:
    // redirect methodu doğası gereği hata fırlatarak çalışır:
    redirect("/products");
  } catch (error) {
    // redirectten dolayı oluşsan bir hata varsa redirect'i çalışması için yakalanan hatayı tekrar fırlatır:
    if (isRedirectError(error)){
      throw error;
    }
    console.log(error);
    throw new Error("Ürün Oluşturuken Bir Hata Oluştu");
  }

};

interface Props {
  product: Product | null;
}

const ProductForm: FC<Props> = ({ product }) => {
  return (
    <form action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Forma Gizli İnput Ekledik ayırt Edicilik olsun diye:Form Action için de modu ayırt etmek için kullanıcam: */}
        {product && <input hidden readOnly name="id" value={product?.id} />}
        {/* SOL SÜTÜN: */}
        <div className="space-y-6">
          {inputs.map((input, key) => (
            <Field key={key} htmlFor={input.name} label={input.label}>
              <input
                className="input"
                id={input.name}
                name={input.name}
                type={input.type}
                min={input.min}
                max={input.max}
                step={input.step}
                // step={input.type === "number" ? 0.1 :undefined}
                required
                defaultValue={product?.[input.name as keyof Product] || ""}
              />
            </Field>
          ))}

          {/* Kategori Input */}
          <Field htmlFor="category" label="Kategori">
            <select
              name="category"
              id="category"
              className="input"
              required
              defaultValue={product?.category}
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        {/* SAĞ SÜTÜN: */}
        <div className="space-y-6">
          {/*RESİM INPUT: */}
          <Field htmlFor="image_url" label="Resim URL">
            <input
              type="text"
              name="image_url"
              id="image_url"
              className="input"
              required
              defaultValue={product?.image_url}
            />
          </Field>
          <ImagePreview />
          {/* Açıklama Inputu*/}
          <Field htmlFor="description" label="Açıklama">
            <textarea
              name="description"
              id="description"
              className="input sm:text-sm md:h-[220px]"
              required
              defaultValue={product?.description}
              rows={5}
            ></textarea>
          </Field>
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          type="submit"
          className="px-6 py-1 rounded-md text-white transition-colors bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 cursor-pointer disabled:cursor-not-allowed"
        >
          {product ? "Güncelle" : "Oluştur"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
