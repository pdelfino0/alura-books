import Header from "./components/Header"
import styled from 'styled-components'
import Pesquisa from "./components/Pesquisa";
import UltimosLancamentos from './components/UltimosLancamentos'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100%), no-repeat;
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos/>
    </AppContainer>
  );
}

export default App;
