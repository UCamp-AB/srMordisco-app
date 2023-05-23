import { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';



function Formulario() {
    const [formulario,setFormulario] = useState({
        nombre: '',
        cuantos: '',
        fecha: ''
    });

    const handleInputChange =  (event) =>{
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    }

    const guardarReservacion = async (event) =>{
        event.preventDefault();
        console.log(formulario);
        const docRef = await addDoc (collection(db, "reservaciones"),formulario);
        console.log("Documento agregado con el ID ",docRef.id);
        limpiarFormulario();
    }

    const limpiarFormulario =() => {
        setFormulario({
            nombre: '',
            cuantos: '',
            fecha: ''
        });
    }

    return (
        <form onSubmit={guardarReservacion}>
            <div className="mb-3">
                <label className="form-label">Nombre de quien reserva</label>
                <input type="text" className="form-control" name='nombre' onChange={handleInputChange}/>
                <div className="form-text text-danger fst-italic">Esta persona debe presentarse el día de la cita</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Cuantas personas?</label>
                <input type="number" className="form-control" name='cuantos' onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha de Reserva</label>
                <input type="date" className="form-control" name='fecha' onChange={handleInputChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Guardar</button>
        </form>

    );
}

export default Formulario;