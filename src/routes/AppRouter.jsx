import { Navigate, Route, Routes } from 'react-router-dom';

//Mis páginas
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import Reserva from '../pages/Reserva';
import Menu from '../pages/Menu';

function AppRouter() {
    return (
        <Routes>
            <Route path="/reserva/:sede" element={<Reserva/>} />
            <Route path="inicio" element={<Home/>}/>
            <Route path="nosotros" element={<AcercaDe/>}/>
            <Route path="menu" element={<Menu/>}/>
            <Route path="/" element={<Navigate to="/inicio"/>}/>
        </Routes>
    );
}

export default AppRouter;