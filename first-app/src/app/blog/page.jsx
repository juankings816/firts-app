export const metadata = {
  title: "Mi blog",
  descriptiom: "Una descripción del sitio",
  keywords: ["p1", "p2"],
};
export default async function Post() {
  const data = await getData();
  return (
    <div>
      <h1>Blog de pruebas</h1>
      <p>Este es el contenido del blog</p>
      <br />
      <br />
      <ul>
        {data.map(({ id, title, body }) => (
          <li key={id}>
            <h3>
              {id} -- {title}
            </h3>
            <p>{body}</p>
            <br />
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
