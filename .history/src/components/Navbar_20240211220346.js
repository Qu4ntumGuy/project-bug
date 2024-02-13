export default function Navbar() {
  return (
    <nav className="h-12 w-full bg-[#4C566A] flex">
      <div className="flex-1">Logo</div>
      <ul className="flex">
        <li>
          <a href="/search">Search</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
