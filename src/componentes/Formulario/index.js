import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./formulario.css";

const Formulario = ({ aoCadastrar, times,cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoSubmeter = (evento) => {
    evento.preventDefault();
    console.log("form enviado", nome, cargo, imagem, time);
    aoCadastrar({
      nome,
      cargo,
      imagem,
      time,
    });
  };

  return (
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados da ameaça mutante.</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Apelido"
          placeholder="Digite o apelido"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Foto"
          placeholder="Informe o endereço da foto"
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Níveis"
          
          items={times}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />
        <Botao texto="Criar cadastro" />
      </form>

      <form className="formulario" onSubmit={(evento) => {
              evento.preventDefault()
              cadastrarTime({ nome: nomeTime, cor: corTime })
            }}>
      <h2>Preencha os dados para criar um novo nível.</h2>
                <CampoTexto
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do novo nível'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio
                    type='color'
                    label='Cor' 
                    placeholder='Digite a cor do nível'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar um novo nível' />

      </form>
    </section>
  );
};

export default Formulario;