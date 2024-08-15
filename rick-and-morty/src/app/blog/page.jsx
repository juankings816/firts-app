import Link from "next/link";
import styles from "./Post.module.css"; 

export const metadata = {
  title: "Rick and Morty",
  description: "Listado de personajes, escoge tu personaje",
  keywords: ["p1", "p2"],
};

export default async function Post() {
  const characters = await getCharacter();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Listado de personajes</h1>
      <p className={styles.description}>Selecciona el personaje de tu interés</p>
      <div className={styles.carousel}>
        {characters.results.map((character) => (
          <div key={character.id} className={styles.card}>
            <Link href={`/blog/${character.id}`} className={styles.blogLink}>
              <img src={character.image} alt={character.name} className={styles.image} />
              <p className={styles.name}>{character.name}</p>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
  );
}

async function getCharacter() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
      throw new Error("Hubo un error en la red.");
    }
    const characters = await res.json();
    return characters;
  } catch (error) {
    console.error(error);
  }
}
