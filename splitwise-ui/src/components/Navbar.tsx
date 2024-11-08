import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="px-4 py-2 bg-yellow-300 flex items-center justify-between">
      <h1 className="text-xl font-bold">Splitwise</h1>
      <div className="hidden gap-5 text-lg justify-end items-center sm:flex">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
      </div>
      <button className="sm:hidden">
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
      </button>
    </nav>
  );
}
