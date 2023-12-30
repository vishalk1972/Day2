import Searchbar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white flex mb-10 items-center justify-center shadow-md ">
        {/* Website Logo */}
        <div className="flex items-center pb-2">
          <div className="mt-2">
              <img className="h-20 w-28" src="data:image/png;base64,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" alt="app-logo" />
          </div>

        {/* Search bar */}
          <div className="flex items-center ml-20">

          
            <Searchbar/>

          
            <div className="flex ml-14 items-center">
                <ul className="flex gap-5 text-xl mr-10">
                  <li>Food</li>
                  <li>Travel</li>
                  <li>Experience</li>
                  <li>Videos</li>
                  <li>More</li>
                </ul>
                <div className="rounded-3xl py-1 px-1 text-sm bg-purple-100 flex gap-1 items-center">
                    <img className="h-4" src="https://icones.pro/wp-content/uploads/2021/04/icone-cloche-notification-violet.png"></img>
                    <button className="text-xl text-pretty text-purple-800 px-2 ">Subscribe</button>
                </div> 
            </div>
          </div>
        </div>   
    </header>
  )
}
