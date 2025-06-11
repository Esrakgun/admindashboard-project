import { FC } from "react"
import Input from "./input";
import { BiSolidBellRing } from "react-icons/bi";
import Image from "next/image";
import avatar from "@/assets/esra avatar.png"

const Header: FC = () => {
  return (
    <header className="border-b border-zinc-300 bg-white flex justify-between px-5 py-2 md:px-8">
      <Input />
      <div className="flex gap-5 items-center">
        <BiSolidBellRing className="text-xl cursor-pointer text-zinc-700" />

     <div className="flex gap-3">
  <Image src={avatar} alt="avatar" width={80} height={80} className="rounded-full size-18" />
  <div>
    <p className="font-semibold text-black mt-[10px]">Esra Akgündoğdu</p>
    <p className="text-sm text-zinc-500 mt-[2px]">Admin</p>
  </div>
</div>
      </div>
    </header>
  )
}

export default Header;