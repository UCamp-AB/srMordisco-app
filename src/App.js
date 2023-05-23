import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import Formulario from './components/Formulario';

function App() {
  return (
    <div className='container'>
      <h1 className='text-primary'>Formularios con firebase</h1>
      <Formulario/>
    </div>
  );
}

export default App;
