import Content from "./components/Content";
import { BrowserRouter } from 'react-router-dom'
import './App.css';
document.body.style.backgroundColor = "black";
document.body.style.fontFamily = "monospace";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Content className="App"></Content>
      </div>
    </BrowserRouter>
  );
}

export default App;