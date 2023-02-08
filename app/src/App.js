import { Side, Main } from "./App.styled"
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Side>Bar letérale</Side>
      <Main>Test</Main>
    </>
  );
}

export default App;
