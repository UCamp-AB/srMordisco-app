import { Navigate, Route, Routes } from 'react-router-dom';

//Mis páginas
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import Sedes from '../pages/Sedes';
import Contacto from '../pages/Contacto';

function AppRouter() {
    return (
        <Routes>
            <Route path="inicio" element={<Home/>}/>
            <Route path="nosotros" element={<AcercaDe/>}/>
            <Route path="sedes" element={<Sedes/>}/>
            <Routes path="Contacto" element={<Contacto/>}/>
            <Routes path="/" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}

export default AppRouter;