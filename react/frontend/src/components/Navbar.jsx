import logo from "../assets/react.svg"
import vitelogo from "../assets/vite.svg"
import djangologo from "../assets/django.svg"

const Navbar = () => {
    return ( 
     <div>
            {/* Navbar for sm screens */}
                <nav className="bg-white md:hidden">
                    <div className="mx-auto px-2 ">
                    <div className="relative flex h-16  w-full items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button id="dropBtn" type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="true">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            {/* Logo */}
                        {/* <!-- <div className="flex flex-shrink-0 items-center">
                            <a href="{% url 'index'%}">
                            
                            </a>
                        </div> -->
                        <!-- <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                            <a href="{% url 'index' %}" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Profile List</a>
                            <a href="{% url 'index' %}" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Search</a>
                            <a href="{% url 'index' %}" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Search (Users)</a>
                            </div>
                        </div> --> */}
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5"></span>
                        </button>
                        {/* <!-- Profile dropdown --> */}
                        <div className="relative ml-3">
                            <div>
                            <button type="button" id="useroptbtn" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"  aria-expanded="false" aria-haspopup="true">
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">Open user menu</span>
                                {/* <!-- {% if request.user.userprofile.Profileimage %}
                                <div className="avatar">
                                    <div className="w-10 rounded-full ring ring-gray-800 ring-offset-base-100 ring-offset-2">
                                    <img src="{% static '{{request.user.userprofile.Profileimage.url}}' %}" alt="{{request.user.username}}"/>
                                    </div>
                                </div>
                                {% else %} --> */}
                                <figure >
                                    <svg fill="#fff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                            width="32px" height="32px" viewBox="0 0 45.532 45.532"
                                            xmlSpace="preserve">
                                    <g>
                                        <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765
                                            S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53
                                            c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012
                                            c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592
                                            c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"/>
                                    </g>
                                    </svg>
                                    </figure>
                            </button>
                            </div>
                            <div id="userdropdown" className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 capitalize" role="menuitem" tabIndex="-1" id="user-menu-item-0">User</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Update Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                    <div className="sm:hidden hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        <a href="{% url 'index' %}" className="p-2 hover:animate-bounce text-black flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8] font-medium">
                            <i className="fas fa-house mr-8"></i>
                            <span className="">Home</span>
                        </a>
                        <a href="{% url 'my-list' %}" className="p-2 hover:animate-bounce text-black flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                            <i className="fa-regular fa-bookmark fa-rotate-180 mr-8 fa-lg"></i>
                            <span className="">Mylist</span>
                        </a>
                        <a href="{% url 'logout' %}" className="p-2 hover:animate-bounce text-black flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                            <i className="fa-solid fa-right-to-bracket fa-rotate-180 mr-8 fa-lg"></i>
                            <span className="">Logout</span>
                        </a>
                    </div>
                    </div>
                </nav>
                {/* <!-- End fo Navbar for sm screens -->
                <!-- Navbar for md and above screens --> */}
                <nav className="hidden text-white h-screen rounded-xl md:flex flex-col justify-between">
                    <div className="pl-4">
                        <ul className="space-y-2 ">
                            <a href="/" className="flex">
                                <img className="h-16 w-16 my-4 animate-spin" src={logo} alt="GIF" />
                                <img className="h-16 w-16 my-4 animate-pulse" src={vitelogo} alt="GIF" />
                                <img className="h-16 w-16 ml-4 my-4 animate-pulse" src={djangologo} alt="GIF" />
                            </a>
                            <li className="">
                                <a href="/" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fas fa-house mr-8"></i>
                                    <span className="">Home</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/all-products" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-regular fa-compass fa-lg mr-8"></i>
                                    <span className="">Produucts</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="/add-product" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-solid fa-user-group mr-8"></i>
                                    <span className="">Add product</span>
                                </a>
                            </li>
                            <hr className="border-gray-700  dark:border-gray-200 opacity-50 ml-12 mr-16" />
                        </ul>
                        <ul className="space-y-2 pt-4 ">
                            <li className="">
                                <a href="#" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-solid fa-clock-rotate-left mr-8"></i>
                                    <span className="">Recent</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="link" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-regular fa-bookmark fa-lg mr-8"></i>
                                    <span className="">My list</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="#" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-regular fa-star fa-lg mr-8"></i>
                                    <span className="">Top rated</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="#" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-regular fa-circle-down fa-lg mr-8"></i>
                                    <span className="">Downloads</span>
                                </a>
                            </li>
                            <hr className="border-gray-700 dark:border-gray-200 opacity-50 ml-12 mr-16"/>
                        </ul>
                        <ul className="space-y-2 pt-4 ">
                            <li className="">
                                <a href="#" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-solid fa-gear mr-8"></i>
                                    <span className="">Settings</span>
                                </a>
                            </li>
                            <li className="">
                                <a href="#" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-regular fa-circle-question fa-lg mr-8"></i>
                                    <span className="">Help</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="pl-4">
                        <ul className="pb-32">
                            <li className="">
                                <a href="{% url 'logout' %}" className="p-2 hover:animate-bounce text-black dark:text-white flex w-full items-center hover:border-r-4 focus:border-r-4  hover:text-[#89ccf8] hover:border-r-[#89ccf8] focus:text-[#aed6f1] focus:border-r-[#89ccf8] active:text-[#aed6f1] active:border-r-4  active:border-r-[#89ccf8]">
                                    <i className="fa-solid fa-right-to-bracket fa-rotate-180 mr-8 fa-lg"></i>
                                    <span className="">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            {/* <!-- End fo Navbar for md and above screens --> */}
        </div>
     );
}
 
export default Navbar;