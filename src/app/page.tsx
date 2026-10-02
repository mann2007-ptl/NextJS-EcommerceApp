"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function Home() {

  const router = useRouter();

  const isValid = true;

  const onClickHandle = () => {
    console.log("clicked");
    console.log("clicked");
    console.log("clicked");

    if(isValid){
      router.push("/products")
    }
  }

  return(
    <div>
      <img src="Walmart-Logo.png" className="w-[10vw]" alt="" />
      <h1 className="text-2xl font-bold ">{process.env.STORE_NAME}</h1>

     <Navbar />

      <br /><br />

      <button className="border bg-cyan-600 p-3 rounded-md hover:bg-red-600" onClick={onClickHandle}>
           Login
      </button>

    </div>
  )
}






// import Image from "next/image";
// import Link from "next/link";
// import { redirect } from "next/navigation";


// export default function Home() {


//   const isValid = true;
//   if (isValid) {
//     redirect("/products");
//   }


//   return (
//     <div>
//       <img src="Walmart-Logo.png" className="w-[10vw]" alt="" />
//       <h1 className="text-2xl font-bold ">{process.env.STORE_NAME}</h1>

//       <nav className="flex gap-3">
//         <Link href={"/products"}>Product</Link>
//         <Link href={"/contact"}>Contacts</Link>
//         <Link href={"/categories"}>Categories</Link>
//         <Link href={"/terms"}>Terms</Link>
//       </nav>

//     </div>
//   )
// }
