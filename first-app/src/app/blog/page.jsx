import Link from "next/link";
import styles from "./Post.module.css"; // Ajusta la ruta si es necesario

export const metadata = {
  title: "Mi blog",
  description: "Una descripción del sitio",
  keywords: ["p1", "p2"],
};

export default async function Post() {
  const data = await getData();
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Blog de pruebas</h1>
      <p className={styles.description}>Selecciona el articulo de tu interes</p>
      <ul className={styles.blogList}>
        {data.map(({ id, title, body }) => (
          <li key={id} className={styles.blogItem}>
            <Link href={`/blog/${id}`} className={styles.blogTitle}>
              {id} -- {title}
            </Link>
            <p className={styles.blogBody}>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Hubo un error en la red.");
    }
    const posts = await res.json();
    return posts;
  } catch (error) {
    console.error(error);
  }
}
