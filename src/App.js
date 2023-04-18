import Header from "./components/Header"
import styled from 'styled-components'
import Pesquisa from "./components/Pesquisa";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);



`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
    </AppContainer>
  );
}

export default App;
