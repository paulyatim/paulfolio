import Content from "./components/Content";
import Responsive from "./components/Responsive";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from "react";
document.body.style.backgroundColor = "black";

function App() {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 768;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  if (width > breakpoint) {
    return (
      <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
        <div>
          <Content className="App"></Content>
        </div>
      </BrowserRouter>
    );
  } 
  return (
    <BrowserRouter basename={import.meta.env.PUBLIC_URL}>
      <div>
        <Responsive className="App"></Responsive>
      </div>
    </BrowserRouter>
  );

  
}

export default App;