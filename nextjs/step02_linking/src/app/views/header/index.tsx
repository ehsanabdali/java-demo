import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex gap-6 py-2 px-5 bg-gray-300">
    <button className="rounded-full bg-red-700 px-5 py-1">Home</button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/name/address">Address</Link></button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/name">Name</Link></button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/blogs">Blog</Link></button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/blogs/slug">Slug</Link></button>

    </nav>
  );
};

export default Header;