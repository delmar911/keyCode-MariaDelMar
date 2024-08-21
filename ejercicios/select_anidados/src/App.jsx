
import { Selects } from './components/Selects'

const App = () =>{
  return (
    //esto es un fragmento
    <>
      <nav>
        <h1>Hola mundo desde react</h1>
        <p>aprendizaje de react</p>
      </nav>
     <hr />
     <h2 className='subtitle'>Lugar de residencia</h2>
     <div className='container-select'>
      
        <Selects/>
     </div>
     
     
     
    </>
  )
}

export default App
