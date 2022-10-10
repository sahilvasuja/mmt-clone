import Link from "next/Link";
const Header = () => {
  return (
    <header className="bg-gray-800 px-8 py-4 flex flex-row items-center">
      <a
        href="/"
        className="mx-2 text-xl px-4 py-1 rounded-full hover:bg-gray-600 text-white hover:bg-white-400 duration-100"
      >
        Home
      </a>

      <a
        href="/signup"
        className="mx-2 text-xl px-4 py-1  rounded-full hover:bg-gray-600 text-white hover:bg-white-400 duration-100"
      >
        Sign Up
      </a>
      <a
        href="/signin"
        className="mx-2 text-xl px-4 py-1 rounded-full text-white hover:bg-gray-600 duration-100"
      >
        Sign In
      </a>
    </header>
  );
};

export default Header
