import { AiFillCloseCircle } from "react-icons/ai";
import { GiHumanTarget } from "react-icons/gi";
import { TfiTarget } from "react-icons/tfi";
import "./colaborador.css";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }

  const propsfavorito = {
    size: 50,
    onClick: favoritar,
  };
  return (
    <div className="colaborador">
      
      <AiFillCloseCircle
        size={40}
        color="red"
        className="deletar"
        
        onClick={() => aoDeletar(colaborador.id)}
      /> 
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="alvo">Clique no ícone abaixo para travar ou destravar o alvo</div>
        <div className="favoritar">
          {colaborador.favorito ? (
            <GiHumanTarget {...propsfavorito} color="#ff0000" alt="Travar Alvo"/>
          ) : (
            <TfiTarget {...propsfavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
