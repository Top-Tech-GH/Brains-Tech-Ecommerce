// import { useEffect } from "react";
import { api_url } from "../other/ConstDeclare";
import useFetchData_From_Custom_API from "../other/FetchData";

import Footer from "./Footer";

const Products = () => {

    const {data: products, isPending, err}= useFetchData_From_Custom_API(api_url)
    console.log(products)

    return (
        <div className="relative flex min-h-full flex-col justify-center overflow-hidden">
            <div className="mx-auto max-w-screen-xl px-4 w-full">
                {err && <div className="relative flex items-top justify-center min-h-screen dark:bg-gray-900 sm:items-center sm:pt-0">
                            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                                <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                                    <div className="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                                    <i className="fa-solid fa-triangle-exclamation fa-2xl"></i>
                                    </div>
                                    <div className="ml-4 text-lg text-gray-500 uppercase tracking-wider"> 
                                       {err}
                                    </div>
                                </div>
                            </div>
                        </div>}
                {isPending &&<div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="px-6 py-4">
                                            <div className="h-6 bg-gray-300 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-2/3"></div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-1/2"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="px-6 py-4">
                                            <div className="h-6 bg-gray-300 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-2/3"></div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-1/2"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="px-6 py-4">
                                            <div className="h-6 bg-gray-300 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-2/3"></div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-1/2"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="px-6 py-4">
                                            <div className="h-6 bg-gray-300 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-2/3"></div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-1/2"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="px-6 py-4">
                                            <div className="h-6 bg-gray-300 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-2/3"></div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-1/2"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center">
                                    <div className="w-full">
                                        <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                        <div className="h-48 bg-gray-300"></div>
                                        <div className="px-6 py-4">
                                            <div className="h-6 bg-gray-300 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-2/3"></div>
                                        </div>
                                        <div className="px-6 pt-4 pb-2">
                                            <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
                                            <div className="h-4 bg-gray-300 w-1/2"></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
            }
                {/* <h2 className="mb-4 font-bold text-xl text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, consequuntur.</h2> */}
                { products && <><div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                        <a href="" className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </a>
                        <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                        <div className="h-auto overflow-hidden">
                            <div className="h-44 overflow-hidden relative">
                                <img src="https://picsum.photos/400/400" alt="" />
                            </div>
                        </div>
                        <div className="bg-white py-4 px-3">
                            <h3 className="text-xs mb-2 font-medium">Des cadeaux incroyables prêts à être utilisés dans votre prochain projet</h3>
                            <div className="flex justify-between items-center">
                                <p className="text-xs text-gray-400">
                                Lorem, ipsum dolor sit amet
                            </p>
                                <div className="relative z-40 flex items-center gap-2">
                                    <a className="text-orange-600 hover:text-blue-500" href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </a>
                                    <a className="text-orange-600 hover:text-blue-500" href="">
                                        <i className="fas fa-cart-shopping fa-lg"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div> 
                <Footer /></> }
            </div>
        </div>
     );
}
 
export default Products;