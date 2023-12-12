import './App.js'
import AllRouters from './routers/index.jsx'

import "../node_modules/bootstrap/scss/bootstrap.scss"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { Container } from './App.js'

function App() {

  return (
    <Container>
      <AllRouters/>      
    </Container>
  )
}

export default App
