import { useState } from "react";
import Banner from "./componentes/Banner";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nível Ômega",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nível Alfa",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nível Beta",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nível Gama",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nível Delta",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Nível Épsilon",
      cor: "#FFBA05",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Erik Lehnsherr",
      cargo: "Magneto",
      imagem: "/imagens/magneto.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Ororo Munroe",
      cargo: "Tempestade",
      imagem: "/imagens/tempestade.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jean Grey",
      cargo: "Garota Marvel (Fênix) ",
      imagem: "/imagens/jean.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Robert Drake",
      cargo: "Homem de Gelo",
      imagem: "/imagens/iceman.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Kitty Pryde",
      cargo: "Lince Negra",
      imagem: "/imagens/lince.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Piotr Rasputin",
      cargo: "Colossus",
      imagem: "/imagens/colossus.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Scott Summers",
      cargo: "Ciclope",
      imagem: "/imagens/ciclope.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Emma Frost",
      cargo: "Rainha Branca",
      imagem: "/imagens/emma.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "James Logan Howlett",
      cargo: "Wolverine",
      imagem: "/imagens/logan.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Remy Etienne LeBeau",
      cargo: "Gambit",
      imagem: "/imagens/gambit.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Namor",
      cargo: "Namor",
      imagem: "/imagens/namor.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Anna Marie",
      cargo: "Vampira",
      imagem: "/imagens/vampira.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Kurt Wagner",
      cargo: "Noturno",
      imagem: "/imagens/noturno.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Henry McCoy",
      cargo: "Fera",
      imagem: "/imagens/fera.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Raven Darkhölme",
      cargo: "Mística",
      imagem: "/imagens/mistica.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Victor Creed",
      cargo: "Dentes de Sabre",
      imagem: "/imagens/dentes.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Neena Thurman",
      cargo: "Dominó",
      imagem: "/imagens/domino.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Douglas Ramsey",
      cargo: "Cifra",
      imagem: "/imagens/cifra.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Jonathan Silvercloud",
      cargo: "Forge",
      imagem: "/imagens/forge.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Calisto",
      cargo: "Calisto",
      imagem: "/imagens/calisto.jpg",
      time: times[4].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id),
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      }),
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      }),
    );
  }

  return (
    <div>
      <Banner />

      <section className="times">
        <div className="times_title">
          <h1>Lista dos alvos</h1>
        </div>

        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome,
            )}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
