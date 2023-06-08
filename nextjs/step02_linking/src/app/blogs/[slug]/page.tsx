import Link from "next/link"

export default function Slug({params}:{params: {name:string}}) {
    return (
      <div>
            This is Slug Page. {params.name}
            <div><Link href="/name/address">Address Page</Link></div>
            <div><Link href="/">Home Page</Link></div>
   
      </div>
    )
  }