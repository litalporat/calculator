import { ColorProvider } from "./ColorContext";
import Page from "./Components/Page";

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
