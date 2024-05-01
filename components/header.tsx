import Logo from "./logo";
import { Navbar } from "./navbar";

const Header = () => {
  return (
    <header className="w-full h-36 flex items-center px-12">
      <p>cart placeholder</p>
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
