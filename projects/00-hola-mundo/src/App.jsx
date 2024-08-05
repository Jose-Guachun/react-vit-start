import "./App.css";
import "./style.css";
import { TwiterFollowCard } from "./TwitterFollowCard";
import { useState } from 'react'

export function App() {
  const [name, setName] = useState('José')
  // Se puede pasar funciones como parametros en un componente
  // Se la puede pasar solo declarandola o para ejecutarla que seria con llaves y pasando el paramtro que va a recibir
    const format = (userName) => `@${userName}`;

  // Tambien se puede pasar elementos como paramretro para que posteior se pueda renderiza
  // const element = <h1>Titulo</h1>; y eso se pasaria en un parametro que se declare en el componente para renderizar
  return (
    <section className="App">
      {/* Valor booleano se puede solo mencionar el nombre y ya se aigna el true */}
      {/* De esta forma se utiliza el envio de valor children  puede ser un texto o varias combinaciones de elementos
        El childre es la recepción de elementos de esta forma de hace para enviar todo lo que envuelve a la parte donde se utilice children del componente*/}
      <TwiterFollowCard
        formatUsername={format}
        initialIsFollowing={true}
        userName={name}>
        José Guachun
      </TwiterFollowCard>
      {/* Valor booleano si no se envia ningun parametro este recibira undefine y es un valor falsing */}
      <TwiterFollowCard
        formatUsername={format}
        userName="jvaldez"
        name="Joran Valdez"
      />
      <TwiterFollowCard
        formatUsername={format}
        userName="rviteri"
        name="Rosa Viteri"
      />
      <button onClick={()=>setName('jguachuns')}>Cambiar nombre</button>
    </section>
  );
}
