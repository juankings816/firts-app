import styles from '../Post.module.css';
import { notFound } from 'next/navigation';
import Link from "next/link";


export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  return posts.map(post => ({ id: String(post.id) }));
}

export default async function Page({ params }) {
  const data = await getData(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.body}>{data.body}</p>
      <div>
      <Link href="/blog"> <i className={styles.home}>Back</i></Link>
      </div>
    </div>
  );
}

async function getData(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
      throw new Error('Hubo un error en la red.');
    }
    const post = await res.json();
    return post;
  } catch (error) {
    console.error(error);
    return null;
  }
}
