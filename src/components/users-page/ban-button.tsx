"use client";

import { BanUser } from "@/utils/service";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { FaSpinner, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

interface Props {
  id: string;
}

const BanButton: FC<Props> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleBan = async () => {
    if (!confirm("Bu kullanıcıyı Silmek İstediğinizden Emin misiniz?")) return;
    setIsLoading(true);

    BanUser(id)
      .then(() => {
        toast.success("Kullanıcı Başarıyla Silindi");
        router.refresh();
      })
      .catch(() => {
        toast.error("Kullancı Silinirken bir Hata Oluştu");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <button
      disabled={isLoading}
      onClick={handleBan}
      className="button hover:bg-red-200 text-red-500 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? <FaSpinner className="animate-spin text-sm"/>: <FaTrash />}
    </button>
  );
};
     

export default BanButton;
