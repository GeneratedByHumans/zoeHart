import Logo from "./logo";
import { Navbar } from "./navbar";

const Header = () => {
  return (
    <header className="w-full flex flex-col gap-y-8 justify-between items-center pt-6 pb-6 shadow-md">
      <Logo />
      <Navbar />
    </header>
  );
};

export default Header;
