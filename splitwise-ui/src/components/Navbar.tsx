import { Link } from "react-router-dom";
import Button from "./Button";
import useToggle from "../hooks/useToggle";
const linkElems = (
  <>
    <Link to="/">
      <Button>Home</Button>
    </Link>
    <Link to="/login">
      <Button>Login</Button>
    </Link>
    <Link to="/register">
      <Button> Register</Button>
    </Link>
  </>
);
export default function Navbar() {
  const [isHamMenuOpen, toggleHamMenu] = useToggle(false);
  return (
    <>
      <nav className="px-4 py-2 bg-yellow-300 flex items-center justify-between">
        <h1 className="text-xl font-bold">Splitwise</h1>
        <div className="hidden gap-5 text-lg justify-end items-center sm:flex">
          {linkElems}
        </div>

        <Button className="sm:hidden" onClick={toggleHamMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </Button>

        {/* Hamburger Menu */}
        <div
          className={`
              sm:hidden gap-5 text-lg flex flex-col items-end 
              transform transition-transform duration-300 h-full absolute right-0 px-2 py-2 top-[0] bg-yellow-300
            ${isHamMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <Button onClick={toggleHamMenu} className="sm:hidden top-0 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 30 30"
            >
              <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
            </svg>
          </Button>
          {linkElems}
        </div>
      </nav>
    </>
  );
}
