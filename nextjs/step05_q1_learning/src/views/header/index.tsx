import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex gap-6 py-2 px-5 bg-gray-300">
      <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/" className="text-sm">Home</Link></button>
      <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/about" className="text-sm">About</Link></button>
      <Link href="/contact-us" className="text-sm">Contact Us</Link>
      <Link href="/dashboard" className="text-sm">Dashboard</Link>
      <Link href="/blogs" className="text-sm">Blogs</Link>
    </nav>
  );
};

export default Header;
