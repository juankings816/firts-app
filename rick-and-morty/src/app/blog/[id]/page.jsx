import styles from '../Post.module.css';
import { notFound } from 'next/navigation';
import Link from "next/link";

export async function generateStaticParams() {
  const posts = await fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json());

  const personajes = posts.results;

  const params = personajes.map((personaje) => ({
    params: {
      id: personaje.id.toString()
    }
  }));

  return params;
}

export default async function Page({ params }) {
  const data = await getData(params.id);

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
       <img src={data.image} alt={data.name} className={styles.image} />
      <h1 className={styles.title}>{data.name}</h1>
      <p className={styles.body}>{data.status}</p>
      <p className={styles.body}>{data.species}</p>
      <p className={styles.body}>{data.gender }</p>
      <div>
        <Link href="/blog"> <button className={styles.home}>Back</button></Link>
      </div>
    </div>
  );
}

async function getData(id) {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
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
