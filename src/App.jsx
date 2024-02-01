import Content from "./components/Content";
import { BrowserRouter } from 'react-router-dom'
import './App.css';
document.body.style.backgroundColor = "black";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <div>
        <Content className="App"></Content>
      </div>
    </BrowserRouter>
  );
}

export default App;