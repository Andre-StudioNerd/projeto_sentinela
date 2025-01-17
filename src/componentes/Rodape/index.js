import "./rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section className="alinha_footer">
        <ul>
          <li className="social_media">
            <a
              href="https://www.facebook.com/MarvelBR/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li className="social_media">
            <a href="https://x.com/MarvelBR" target="_blank" rel="noreferrer">
              <img src="/imagens/twitter.png" alt="X" />
            </a>
          </li>
          <li className="social_media">
            <a
              href="https://www.instagram.com/marvelbrasil/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/imagens/instagram.png" alt="instagram" />
            </a>
          </li>
        </ul>
      </section >
      <section className="alinha_footer footer_text">
        <p>&#169; 2024 - Desenvolvido por André Luís Fernandes.</p>
        <p>&#174; Marvel Comics - Todos os direitos reservados.</p>
      </section>
      <section className="alinha_footer">
        <img src="/imagens/logo_p.png" alt="Logo - Projeto Sentinela" />
      </section>
    </footer>
  );
};

export default Rodape;
