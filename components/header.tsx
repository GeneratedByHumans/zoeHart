import { Car, Search } from "lucide-react";
import Logo from "./logo";
import { Navbar } from "./navbar";
import SearchBar from "./SearchBar/SearchBar";
import CartButton from "./Cart/CartButton";

const Header = () => {
  const quantity = 5;
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">

          <div className="flex justify-start lg:w-0 lg:flex-1">
            <SearchBar />
          </div>

          <div className="flex flex-col items-center gap-y-8 justify-center flex-grow">
            <Logo />
            <Navbar />
          </div>

          <div className="flex items-center justify-end lg:w-full lg:flex-1">
            <CartButton quantity={quantity} />
            {/* <FavoritesButton /> */}
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
