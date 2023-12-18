import React, { useEffect, useState } from 'react'

export default function Desmontaje() {
  const [date, setDate] = useState(new Date())

  //Para el desmontaje, se usa un return de una función
  useEffect(() => {
    //setInterval hace que se ejecute la función cada 1 seg
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, []);

  return <div>{date.toString()}</div>
}
