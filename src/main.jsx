import React from 'react' //fixed code
import ReactDOM from 'react-dom/client' //fixed code
import App from './App.jsx' //defualt import
// import App, {userEmail, userName} from "./App" // named import
import './index.css' //root css code


//fixed code for debuging , ...
//Render Components
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// don't write Components here!