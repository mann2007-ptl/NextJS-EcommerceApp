import Image from "next/image";

export default function Home() {
  return(
    <div>
      <img src="Walmart-Logo.png" className="w-[10vw]" alt="" />
      <h1 className="text-2xl font-bold ">{process.env.STORE_NAME}</h1>
      <p>Walmart is a massive American multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores around the world.</p>
    </div>
  )
}
