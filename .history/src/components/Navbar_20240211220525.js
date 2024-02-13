export default function Navbar() {
  return (
    <nav className="h-12 w-full bg-[#4C566A] flex">
      <div className="flex-1">
        <Image
          src={monitorPage}
          alt="Dashboard Image"
          width={60}
          height={60}
          className=" rounded-md"
        />
      </div>
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
