// Este componente aplica automaticamente as novas fontes em todo o app
// através do CSS global que será aplicado
import { useEffect } from 'react';

const TypographyUpdate = () => {
  useEffect(() => {
    // Aplicar fontes modernas em elementos específicos
    const style = document.createElement('style');
    style.textContent = `
      /* Aplicar Satoshi para títulos e headings */
      h1, h2, h3, h4, h5, h6, .font-heading, .font-display {
        font-family: 'Satoshi', 'Geist', system-ui, sans-serif !important;
        font-weight: 600;
        letter-spacing: -0.025em;
      }
      
      /* Geist para corpo de texto */
      body, p, .font-sans {
        font-family: 'Geist', system-ui, sans-serif !important;
        font-weight: 400;
        letter-spacing: -0.011em;
      }
      
      /* Melhorar legibilidade */
      * {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

export default TypographyUpdate;