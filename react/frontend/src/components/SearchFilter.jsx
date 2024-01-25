const SearchFilter = () => {

    const handelInput= (event) =>{
        console.log(event)
    }

    return ( 
        <div className="hide-scrollbar">
            <div className="pt-20 px-5">
                <form action="" method="POST">
                    <div className="p-3 flex items-center space-x-1 border-2 border-dashed border-[#53ade9]">
                        <i className="fas fa-magnifying-glass fa-lg text-black dark:text-[#9faebd]"></i>
                        <input className="w-48 px-2 py-[4px] bg-[#1c2733] dark:bg-[#364350] rounded-3xl focus:outline-none" placeholder="search by title" autoComplete="off" type="text" name="search" id="search-input" onInput={(e) => handelInput(e.target.value)} />
                    </div>
                </form>
                <div className="mt-4">
                    <h1 className="uppercase mb-3 text-black dark:text-white">product categories</h1>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                        <form action="" id="action">
                            <div className="bg-[#1c2733] dark:bg-[#364350] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="action-div">
                                <input type="submit" value="Laptops" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] dark:bg-[#364350] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="comedy-div">
                                <input type="submit" value="Phones" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] dark:bg-[#364350] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="romance-div">
                                <input type="submit" value="Hard disk" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                    </div>
                    <h1 className="uppercase mb-3 text-black dark:text-white mt-8">product brands</h1>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                        <form action="" id="action">
                            <div className="bg-[#1c2733] dark:bg-[#364350] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="action-div">
                                <input type="submit" value="Apple" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] dark:bg-[#364350] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="comedy-div">
                                <input type="submit" value="Samsung" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] dark:bg-[#364350] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="romance-div">
                                <input type="submit" value="Hp" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter;