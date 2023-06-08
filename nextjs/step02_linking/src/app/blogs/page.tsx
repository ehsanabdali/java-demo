import Link from "next/link"

export default function BlogPage({params, SearchParams} : {
  params: {name:string},
  SearchParams: {id: string}
}) {
    return (
      <div>
            This is Blog Page. {params.name}
            <div><Link href="/">Home Page</Link></div>
   
      </div>
    )
  }