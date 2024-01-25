// import { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Holder from "./ContentHolder"
import Navbar from "./Navbar"
import SearchFilter from "./SearchFilter"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="hide-scrollbar bg-gray-400 dark:bg-gray-900 text-white md:py-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 w-full h-full  lg:grid-cols-5 sm:gap-1 md:gap-5 md:pl-5 ">
      <div className="bg-white dark:bg-[#1c2733] col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 md:rounded-lg justify-center items-center">
        <Navbar />
      </div>
      <div className="hide-scrollbar bg-white dark:bg-[#1c2733] col-span-2 lg:col-span-3 md:mx-3 md:col-span-3 sm:col-span-1 h-screen md:rounded-lg overflow-y-auto">
        <Holder />
      </div>
      <div className="bg-white dark:bg-[#1c2733] col-span-1 hidden lg:block mr-5 rounded-lg w-fit h-screen overflow-y-auto ">
        <SearchFilter />
      </div>
    </div>
  )
}

export default App
