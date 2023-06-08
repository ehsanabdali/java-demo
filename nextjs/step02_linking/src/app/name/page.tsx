import Link from "next/link"

export default function NamePage() {
    return (
      <div>
            This is Name Page.
            <div><Link href="/name/address">Address Page</Link></div>
            <div><Link href="/">Home Page</Link></div>
   
      </div>
    )
  }