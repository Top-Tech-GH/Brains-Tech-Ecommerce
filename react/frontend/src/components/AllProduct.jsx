// import { useEffect } from "react";
import { api_url } from "../other/ConstDeclare";
import useFetchData_From_Custom_API from "../other/FetchData";
import Cards from "./Cards";

import Footer from "./Footer";

const Products = () => {

    const {data: products, isPending, err}= useFetchData_From_Custom_API(api_url)
    

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
                { products && <><div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:mt-10">
                    <Cards data={products}/>
                </div> 
            <Footer />
                </> }
            </div>
        </div>
     );
}
 
export default Products;