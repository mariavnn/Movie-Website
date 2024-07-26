import { SearchBar } from "./SearchBar"

function Header() {
  return (
    <header className="bg-black w-full flex justify-between p-5 pl-10">
        <h1 className="font-bold text-secondary text-3xl">Tv&Movies</h1>
        <nav className=" text-white ">
            <ul className="flex gap-4 font-bold">
                <li>Movies</li>
                <li>Tv Shows</li>
                <li>My Favorites</li>
            </ul>
        </nav>
        <SearchBar/>
    </header>
  )
}

export { Header }
