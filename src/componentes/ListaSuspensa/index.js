import "./lista-suspensa.css";

const ListaSuspensa = ({
  label,
  items,
  valor,
  aoAlterado,
  obrigatorio = false,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <div className="custom-select">
      <select
        required={obrigatorio}
        value={valor}
        onChange={(evento) => aoAlterado(evento.target.value)}
      >
        
        <option selected>Escolha o nível</option>
        {items.map((item) => (
          
          <option key={item}>{item}</option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default ListaSuspensa;