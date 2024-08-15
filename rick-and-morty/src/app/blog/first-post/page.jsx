import Image from "next/image";
import Link from "next/link";

export const metadata ={
    title: 'Primer blog'
}

export default function FirstPost() {
    return (
        <div>
            <h1>Este es el primer post</h1>
            <Image src="/img/dog1.jpg" width={300} height={300}></Image>
            <Link href={"/"}>Ir a la pagina principal</Link>
        </div>
    )
}