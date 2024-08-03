import Image from "next/image";
export default function Layout({ children }) {
    return (
      <>
        <Image src="/img/dog1.jpg" width={300} height={300}></Image>
        <nav>Nav bar</nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </>
    );
  }
  