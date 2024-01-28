import Cards from "./Cards";

const AddProduct = () => {

  const data=  [{
    "id": 8,
    "uu_id": "45435f1f-66c3-4449-b51f-d46cfe3098f2",
    "machineName": "Apple",
    "machinePrice": "200.00",
    "machineDescription": "lorem ipsum..",
    "machineNegotiatable": false,
    "machineImage": "http://localhost:8000/media/images/dr_stone_VczfG1H.jpg",
    "machineCategory": 1,
    "machineBrand": 1,
    "is_sale": true,
    "sale_price": "0.00",
    "user": "admin",
    "dt": "2024-01-22T10:32:45Z"
  },]
    return ( 
        <div>
<div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center">
            <div 
                  className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
                  >

                  </div>
            <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
              {/* <h1 className="text-white font-bold text-4xl font-sans">Simple App</h1>
              <p className="text-white mt-1">The simplest app to use</p>
              <div className="flex justify-center lg:justify-start mt-6">
                  <a href="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
              </div> */}
              <Cards data={data}/>
            </div>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center dark:bg-[#1c2733] bg-white space-y-8">
            <div className="w-full px-8 ">
            <form className="bg-white dark:bg-[#364350] rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 dark:text-gray-100 font-bold text-2xl mb-1">Hello Again!</h1>
              <p className="text-sm font-normal dark:text-gray-200 text-gray-600 mb-8">Welcome Back Add New Product</p>
              <div className="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl">
                <input id="productName" className=" pl-2 w-full outline-none border-none bg-transparent" type="text" name="productName" placeholder="Product Name" />
              </div>
              <div className="flex items-center border-2 mb-4 hide-scrollbar py-2 px-3 rounded-2xl">
                <input id="productPrice" className=" pl-2 w-full outline-none border-0 bg-transparent" type="number" name="productPrice" placeholder="Product Price" />
              </div>
              <div className="flex items-center border-2 mb-4 hide-scrollbar py-2 px-3 rounded-2xl">
                <textarea maxLength="300" name="productDescription" id="productDescription" rows="4" cols="80" className="border-0 pl-2 bg-transparent rounded outline-none w-full" placeholder="Product description here.." required></textarea>
              </div>
              <div className="flex justify-around hide-scrollbar py-2 px-3">
                <select className="textCustom" aria-label="Default select example" name="machineBrand">
                  <option className="text-black" value="brand">Category</option>
                  <option className="text-black" value="{{brand}}">{data[0].machinePrice}</option>
                </select>
                <select className="textCustom" aria-label="Default select example" name="machineBrand">
                  <option value="brand">Brand</option>
                  <option className="text-black" value="{{brand}}">{data[0].machinePrice}</option>
                </select>
              </div>
              <label className="cursor-pointer hover:opacity-80 flex justify-center items-center px-2 py-2 bg-slate-600 text-gray-50 border border-transparent rounded-md hover:bg-gray-900 transition ease-in-out duration-150" htmlFor="restaurantImage">                  
                  Select Image
                  <input className="text-sm cursor-pointer w-36 hidden" type="file" name="machineImage" id="image-input" accept="image/*" onChange={() => {}} />
              </label>
              <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2">Login</button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Forgot Password ?</span>

                <a href="#" className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Dont have an account yet?</a>
              </div>
              
            </form>
            </div>
            
          </div>
      </div>
        </div>
     );
}
 
export default AddProduct;