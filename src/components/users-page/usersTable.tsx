import { FC } from "react";
import { getUsers } from "@/utils/service";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import BanButton from "./ban-button";

const UsersTable: FC = async () => {
  await new Promise((resolve)=> setTimeout(resolve,1000));
  const users = await getUsers();
  // console.log(users);

  return (
    <div className="max-sm:w-[80vw] overflow-x-auto">
      <table className="border shadow w-full bg-white rounded-md border-zinc-300 z-0">
        <thead>
          <tr className="border-b border-zinc-300 shadow">
            <th className="py-4 px-2">No</th>
            <th className="py-4 px-2">İsim</th>
            <th className="py-4 px-2">Eposta</th>
            <th className="py-4 px-2">Ülke</th>
            <th className="py-4 px-2">Şehir</th>
            <th className="py-4 px-2">Sipariş Sayısı</th>
            <th className="py-4 px-2">Eylem</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, key) => (
            <tr key={key} className="text-center">
              <td className="py-4 px-2">{key + 1}</td>
              <td className="py-4 px-2">{user.name}</td>
              <td className="py-4 px-2">{user.email}</td>
              <td className="py-4 px-2">{user.address.country}</td>
              <td className="py-4 px-2">{user.address.city}</td>
              <td className="py-4 px-2">{user.orders.length}</td>
              <td className="py-4 px-2">
                <div className="flex justify-center gap-3">
                  <Link 
                  href={`?show=${user.id}`} 
                  className="hover:bg-gray-200 p-2 rounded">
                    <FaEye />
                  </Link>
                  <BanButton id={user.id} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
