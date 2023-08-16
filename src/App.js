import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Nosotros from './components/Nosotros';


function App() {
  return (
    <>
      <Header />
      <Menu/>
      <div className='info text-center'>
        <div className='row align-items-center'>
          <div className="col">
            <Nosotros/>
          </div>
          <div className='vr'></div>
          <div className="col">
            <Formulario/>
          </div>
        </div>
      </div>
      <Nosotros/>
      <Footer />
    </>
  );
}

export default App;
