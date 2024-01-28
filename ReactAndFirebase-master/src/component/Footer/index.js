// Footer.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import './Footer.css';

// Adicione os ícones diretamente no componente
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faLinkedin, faGithub);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Desenvolvido por Eduardo, Joana, Diogo</p>
      </div>
    </footer>
  );
};

export default Footer;
