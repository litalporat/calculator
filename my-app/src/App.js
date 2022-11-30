import "./App.css";
import { ColorProvider } from "./ColorContext";
import Page from "./Page";

function App() {
  return (
    <div>
      <ColorProvider>
        <Page />
      </ColorProvider>
    </div>
  );
}

export default App;
