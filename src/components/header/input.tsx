import { FC } from "react"
import { GoSearch } from "react-icons/go"


const Input:FC = () => {
  return (
   <form className="flex gap-2 items-center text-gray-500">
  <button type="submit">
    <GoSearch className="text-2xl" /> {/* veya text-xl */}
  </button>
  <input type="text" className="p-1 outline-none" placeholder="Ara" />
</form>
  )
}

export default Input;