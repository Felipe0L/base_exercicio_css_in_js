import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import temaPrincipal from './containers/tema/principal'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <ThemeProvider theme={temaPrincipal}>
      <EstiloGlobal />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
