import Cabecalho from './container/Cabecalho'
import Hero from './container/Hero'
import ListaVaga from './container/ListaVagas'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVaga />
      </Container>
    </>
  )
}

export default App
