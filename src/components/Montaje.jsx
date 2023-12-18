import { useEffect, useState } from "react";

export default function Montaje() {
  const [data, setData] = useState([]);

  //Para monsaje se deja el array de dependencias vacio
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <>
    <h1>{data.title}</h1>
    <h3>{data.body}</h3>
  </>;
}
