import { Navigate, Route, Routes } from 'react-router-dom';

//Mis páginas
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import Menu from '../pages/Menu';
import Reserva from '../pages/Reserva';

function AppRouter() {
    return (
        <Routes>
            <Route path="inicio" element={<Home/>}/>
            <Route path="nosotros" element={<AcercaDe/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="/reserva/:sede" element={<Reserva/>} />
            <Route path="/" element={<Navigate to="/inicio"/>}/>
        </Routes>
    );
}

export default AppRouter;