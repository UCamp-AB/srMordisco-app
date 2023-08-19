import Carrusel from '../components/Carrusel';
import MenuCompleto from '../components/MenuCompleto';



function Menu() {
    return (
    <>
        <Carrusel/>
        <h3 className="text-center p-2 my-3 mx-5">Categorias del menú</h3>
        <div className='tablon mt-3 mb-5 h-auto'>
            <MenuCompleto/>
        </div>
    </> );
}

export default Menu;