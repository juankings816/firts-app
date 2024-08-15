import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col item-center justify-between p-24">
      <div>
        <h1> Bienvenidos a <span>Rick And Morty</span></h1>
        <button><Link href="/blog"> Start</Link></button>
      </div>
    </main>
  );
}
