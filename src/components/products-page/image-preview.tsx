"use client";

import { FC, useEffect, useState } from "react";
import Field from "./field";
import Image from "next/image";

const ImagePreview: FC = () => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // İnputun değişim anını izleyelim:
  useEffect(() => {
    // Resim Url'in girildiği input elementini al:
    const imageInput = document.getElementById("image_url") as HTMLInputElement;
    //  Inputtun değişim anında çalışacak Fonksiyon:
    const handleChange = () => {
      // console.log(e.target.value);
      const newUrl = imageInput.value;
      setImageUrl(newUrl);
      if (newUrl) {
        // !URL'i geçerli bir resim URL'i  olup olmadığını kontrol etmek lazım:
        const testImg = new globalThis.Image();
        setIsLoading(true);
        // todo: Resmi Yüklemeye Çalışalım:
        testImg.onload = () => {
          setIsValid(true);
          setIsLoading(false);
        };
        // todo:Resim Yüklenmezse,Uyarı ver!:
        testImg.onerror = () => {
          setIsValid(false);
          setIsLoading(false);
        };
        // todo:Resmi indirmeye Çalışalım:
        testImg.src = newUrl;
      } else {
        setIsValid(false);
        setIsLoading(false);
      }
    };

    // Inputta Olay İzleyicisi EKLE:
    if (imageInput) {
      imageInput.addEventListener("input", handleChange);
    }
    // Component Unmount olduğuna Olay İzleyicisi KALDIR:
    return () => {
      if (imageInput) {
        imageInput.removeEventListener("input", handleChange);
      }
    };
  }, []);

  console.log(imageUrl, isValid, isLoading);

  return (
    <Field htmlFor="image_url" label="Resmin Özizlemesi">
      <div className="relative w-full h-200 bg-gray-100 rounded-md overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center h-full text-gray-400">Resim Yükleniyor..</div>
        ) : isValid && imageUrl ? (
          <Image src={imageUrl} alt="resim" fill className="object-cover" unoptimized/>
       
        )  : <div className="flex items-center justify-center h-full text-gray-400">{imageUrl ? "Geçersiz Resim Url'i" : "Resim Yok "}</div>}
      </div>
    </Field>
  );
};

export default ImagePreview;
