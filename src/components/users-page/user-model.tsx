import { getUser } from "@/utils/service";
import Link from "next/link";
import { FC } from "react";
import { MdClose } from "react-icons/md";

interface Props {
    id: string;
}

const UserModal: FC<Props> = async ({ id }) => {
    // !URL'de parametre yoksa modalı gizle:
    if (!id) return null;
    // !URL'de parametre varsa modalı göster:
    const user = await getUser(id);
    // Todo:Ekrana Basılacak Alanlardan bir dizi oluştur:
    const fields = [
        {
            label: "Email",
            value: user.email,
        },
        {
            label: "Telefon",
            value: user.phone,
        },
        {
            label: "Ülke",
            value: user.address.country,
        },
        {
            label: "Şehir",
            value: user.address.city,
        },
        {
            label: "Adres",
            value: user.address.street,
        },
        {
            label: "Posta Kodu",
            value: user.address.postal_code,
        },
        {
            label: "Sipariş Sayısı",
            value: user.orders.length,
        },
    ];

    return (
        <div className="fixed bg-black/10 inset-0 z-[99] backdrop-blur-[2px] grid place-items-center">
            <div className="bg-white rounded-lg shadow py-6 px-10 pb-14 w-full max-w-md">
                <div className="flex justify-end items-center">
                    <Link href="/users" className="button hover:bg-zinc-200 transition">
                        <MdClose />
                    </Link>
                </div>

                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-semibold text-center my-5 flex justify-between items-center">
                        {user.name}
                        <img
                            src={user.image}
                            alt={`${user.name} profil resmi`}
                            className="inline-block ml-4 w-25 h-25 rounded-full object-cover align-middle"
                        />
                    </h1>
                    <div className="flex flex-col gap-3">
                        {fields.map((field, key) => (
                            <div key={key} className="flex justify-between">
                                <span>{field.label}</span>
                                <p className="font-semibold">{field.value}</p>
                            </div>
                        ))}
                    </div>
                    <hr className="text-xinc-500" />
                    {/*Önceki siparişler: */}
                    {user.orders.length > 0 && (
                        <div>
                            <div className="grid grid-cols-3 text-center">
                                <span>Ürün ID</span>
                                <span>Adet</span>
                                <span>Toplam Fiyat</span>
                            </div>
                            <div className="flex flex-col gap-2 mt-2">
                                {user.orders.map((order) => (
                                    <div className="bg-gray-100 text-center p-2 rounded-lg grid grid-cols-3 fonst-semibold">
                                        <span> {order.order_id} </span>
                                        <span> {order.quantity} </span>
                                        <span> {Number(order.total_price).toFixed(2)}₺</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserModal;
