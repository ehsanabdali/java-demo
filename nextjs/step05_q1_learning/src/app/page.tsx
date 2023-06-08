import Image from "next/image";
import Link from "next/link";
import ehsanabdaliImage from "@/assets/images/ehsanabdali.jpg";

export default function Home() {
  return (
    <div className="flex justify-center bg-gray-100 py-5">
      <div className="mx-4 order-last self-center ">
        <Image
          src={ehsanabdaliImage}
          alt="myimage"
          width={96}
          height={96}
          className="rounded-full w-24 h-24 object-fill"
        />
      </div>
      <div>
        <h1>Ehsan Abdali</h1>
        <h2 className="text-6xl font-bold text-yellow-700">
          Full Stack Developer
        </h2>
        <button className="mx-4 my-8 px-4 py-2 border-2 border-red-500 rounded-lg text-white bg-blue-900 ">
          Learn More
        </button>
      </div>
    </div>
  );
}
