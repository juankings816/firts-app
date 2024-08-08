import Image from "next/image";
export default function Layout({ children }) {
    return (
      <>
        <nav>Nav bar</nav>
        <Image src="/img/dog1.jpg" width={300} height={300} ></Image>
        <main>{children}</main>
        <footer>Footer</footer>
      </>
    );
  }
  