import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/ZoeHartLogo.svg"
      width={84}
      height={84}
      alt="Image"
      className="object-cover"
    />
  );
};
export default Logo;
