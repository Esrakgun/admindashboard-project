"use client";

import { deleteProduct } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";


interface Props {
    productId: string;
}

const DeleteBtn: FC<Props> = ({ productId }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    // Butona tıklanınca:
    const handleDelete = async () => {
        // Silme İşlemi için onay al:
        if (!confirm("Bu Ürünü Silmek İstediğinizden Emin misiniz?")) return;
        try {
            setIsLoading(true);
            await deleteProduct(productId);
            router.refresh();
        } catch (err) {
            console.log(err);
        }finally{
            setIsLoading(false);
        }
    };



    return (
        <button 
            disabled={isLoading}
            onClick={handleDelete}
            className="card-btn !bg-red-50 !text-red-600 hover:!bg-red-300 border-red-200 cursor-pointer">
            Sil
        </button>
    );
};

export default DeleteBtn;
