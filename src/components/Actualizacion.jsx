import React, { useEffect, useState } from 'react'

export default function Actualizacion() {
  const [count, setCount] = useState(0);

  //Este useEffect no solo se ejecuta en la actualización, también se ejecuta en el montaje al comienzo, por eso aparecen dos console.log en lugar de uno en la consola con el valor 0
  //Para actualizaciones, se coloca una dependencia o más en el array 
  useEffect(() => {
    console.log(count); 
  }, [count]);

  return (
    <>
      <h1>Count</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}
