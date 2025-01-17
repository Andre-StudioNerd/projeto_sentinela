import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nível Ômega",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nível Alfa",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nível Beta",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nível Gama",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nível Delta",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Nível Épsilon",
      cor: "#FFBA05",
    },
    
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito:false,
      nome: "Erik Lehnsherr",
      cargo: "Magneto",
      imagem:
        "https://destrutor.com.br/wp-content/uploads/2024/01/Magneto-Capa-003.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Ororo Munroe",
      cargo: "Tempestade",
      imagem:
        "https://pm1.aminoapps.com/7066/c019ac3502f5f8509670a77c3845390fee40e5a7r1-843-810v2_uhq.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Jean Grey",
      cargo: "Garota Marvel (Fênix) ",
      imagem:
        "https://i.pinimg.com/564x/11/57/06/1157064e135d73e75ade1705316f166a.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Robert Drake",
      cargo: "Homem de Gelo",
      imagem:
        "https://i.pinimg.com/736x/d6/80/fa/d680fafc76e62fbfab0c3605944ce8c3.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Kitty Pryde",
      cargo: "Lince Negra",
      imagem:
        "https://i.pinimg.com/736x/01/1b/26/011b268e46b479dc5255e91ad76a69d6.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Piotr Rasputin",
      cargo: "Colossus",
      imagem:
        "https://i.pinimg.com/564x/94/0e/ec/940eec85b9aceb65d94916ad43aacbf2.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Scott Summers",
      cargo: "Ciclope",
      imagem:
        "https://media.gq.com/photos/66049ca2d6bafed5ec9b791f/1:1/w_1748,h_1748,c_limit/AAM0370_comp_Tk2_v001_r709.117420_C.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Emma Frost",
      cargo: "Rainha Branca",
      imagem:
        "https://i.pinimg.com/736x/72/ae/ec/72aeecc1b748d92e2320d0bbce2c8fb9.jpg",
      time: times[1].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "James Logan Howlett",
      cargo: "Wolverine",
      imagem:
        "https://avatarfiles.alphacoders.com/296/296038.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Remy Etienne LeBeau",
      cargo: "Gambit",
      imagem:
        "https://i.pinimg.com/originals/6e/4a/b6/6e4ab6da470f8dd38b4da7638d35d2e0.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Namor",
      cargo: "Namor",
      imagem:
        "https://i.pinimg.com/originals/c3/19/39/c319390eaff360c24e560622de9633da.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Anna Marie",
      cargo: "Vampira",
      imagem:
        "https://static.wikia.nocookie.net/disney/images/e/e7/Profile_-_Rogue.png",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Kurt Wagner",
      cargo: "Noturno",
      imagem:
        "https://pm1.aminoapps.com/6850/752cc1b97ea9730fd5715a4ddb919794ad27f865v2_hq.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Henry McCoy",
      cargo: "Fera",
      imagem:
        "https://www.fatosdesconhecidos.com.br/wp-content/uploads/2017/04/beast-post-avengers-vs-x-men-500x500.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Raven Darkhölme",
      cargo: "Mística",
      imagem:
        "https://wallpaper.forfun.com/fetch/11/1196a5b298a10356051d22df2a620508.jpeg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Victor Creed",
      cargo: "Dentes de Sabre",
      imagem:
        "https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-sabretooth.webp",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Neena Thurman",
      cargo: "Dominó",
      imagem:
        "https://i.pinimg.com/236x/fc/1e/d9/fc1ed9a4803c86b1a4760c8d5b4251f0.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Douglas Ramsey",
      cargo: "Cifra",
      imagem:
        "https://s3.amazonaws.com/comicgeeks/characters/avatars/1268.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Jonathan Silvercloud",
      cargo: "Forge",
      imagem:
        "https://64.media.tumblr.com/1ab2ac06cd20c3a9ddbbdec3436b8c06/9360f68606cd0211-40/s1280x1920/6e2c797f46d709cb609534713e7767eb33189736.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito:false,
      nome: "Calisto",
      cargo: "Calisto",
      imagem:
        "https://s3.amazonaws.com/comicgeeks/characters/avatars/20646.jpg",
      time: times[4].nome,
    },
    
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    
  }

  function mudarCorDoTime(cor, id) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() } ])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }

  return (
    <div>
      <Banner />
      <Formulario
      cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
        setColaboradores([...colaboradores, colaborador])
        }
      />
      <section className="times">
        <div className="times_title"><h1>Lista dos alvos</h1></div>
        
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
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
