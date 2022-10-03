import React from 'react'; //importa libreria de react. - sin barra lo busca en node_modules
import ReactDOM from 'react-dom/client';//importa al encargado del Virtual Dom y el Dom.
import './index.css';//importa los estilos del index. no es necesario el nombre con archivos css
import App from './App';//importa el otro js "App.js". con punto barra busca en src

const root = ReactDOM.createRoot(document.getElementById('root')); //busca el root del html y le pinta el codigo de abajo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
