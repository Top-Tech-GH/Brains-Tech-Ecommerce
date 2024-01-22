const SearchFilter = () => {

    const handelInput= (event) =>{
        console.log(event)
    }

    return ( 
        <div className="hide-scrollbar">
            <div className="pt-20 px-5">
                <form action="" method="POST">
                    <div className="p-3 flex items-center space-x-1 border-2 border-dashed border-[#53ade9]">
                        <i className="fas fa-magnifying-glass fa-lg text-black"></i>
                        <input className="w-48 px-2 py-[4px] bg-[#1c2733] rounded-3xl focus:outline-none" placeholder="search by title" autoComplete="off" type="text" name="search" id="search-input" onInput={(e) => handelInput(e.target.value)} />
                    </div>
                </form>
                <div className="mt-4">
                    <h1 className="uppercase mb-3">genre</h1>
                    <div className="grid grid-cols-2 gap-x-3 gap-y-4">
                        <form action="" id="action">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="action-div">
                                <input type="submit" value="Action" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="comedy-div">
                                <input type="submit" value="Comedy" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="romance-div">
                                <input type="submit" value="Romance" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="horror-div">
                                <input type="submit" value="Horror" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="science-div">
                                <input type="submit" value="Fiction" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="fantasy-div">
                                <input type="submit" value="Fantasy" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form>
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="drama-div">
                                <input type="submit" value="Drama" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                        <form action="" id="">
                            <div className="bg-[#1c2733] hover:bg-[#53ade9] flex justify-between p-1 px-2 items-center rounded-full" id="mystery-div">
                                <input type="submit" value="Mystery" />
                                <i className="fas fa-plus"></i>
                            </div>
                        </form>
                    </div>
                    {/* <div className="flex justify-between items-baseline mt-4">
                        <h1 className="mb-3 text-lg font-bold">RecentDownload</h1>
                        <a href="#" className="hover:text-[#53ade9] hover:animate-bounce">See all<i className="fas fa-greater-than ml-2"></i></a> 
                    </div>
                    <div className="">
                        <figure className="card w-60 h-60 glass justify-end " style="background-image: url('./img/movie cover/dr.stone_cover.jpg'); background-size: cover; background-repeat: no-repeat; background-position: center;">
                        </figure>
                    </div>
                    <div className="flex justify-between items-baseline mt-4">
                        <h1 className="mb-3 text-lg font-bold">MyList</h1>
                        <a href="#" className="hover:text-[#53ade9] hover:animate-bounce">See all<i className="fas fa-greater-than ml-2"></i></a> 
                    </div>
                    <div className="">
                        <figure className="card w-60 h-60 glass justify-end " style="background-image: url('./img/movie cover/poster4.png'); background-size: cover; background-repeat: no-repeat; background-position: center;">
                        </figure>
                    </div> */}
                </div>
            </div>
        </div>
     );
}
 
export default SearchFilter;