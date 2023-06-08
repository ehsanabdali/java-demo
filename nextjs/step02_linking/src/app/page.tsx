import Link from 'next/link';
 
export default function Home() {
  return (
    <div className="flex flex-row justify-items-centeritems-start pt-10 px-5 space-x-2 space-y-0">
    <button className="rounded-full bg-red-700 px-5 py-1">Home</button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/name/address">Address</Link></button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/name">Name</Link></button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/blogs">Blog</Link></button>
    <button className="rounded-full bg-red-700 px-5 py-1"><Link href="/blogs/slug">Slug</Link></button>
    </div>
    );
}