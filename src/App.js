import Header from "./components/Header"
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);

  li{
    list-style: none;
  }

`

function App() {
  return (
    <AppContainer>
      <Header/>
    </AppContainer>
  );
}

export default App;
