import React, { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';

function Formulario(sede) {
    const [formulario, setFormulario] = useState({
        nombre: '',
        cuantos: '',
        fecha: '',
    });

    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    }

    const guardarReservacion = async (event) => {
        event.preventDefault();
        let collectionName = sede.sede === "Zipaquira" ? "reservaZipa" : "reservaToca";

        console.log(formulario);
        try {
            const docRef = await addDoc(collection(db, collectionName), formulario);
            console.log("Documento agregado con el ID ", docRef.id);

            Swal.fire({
                icon: 'success',
                title: '¡Reservación exitosa!',
                text: 'Tu reservación ha sido guardada correctamente.',
            });

            limpiarFormulario();
        } catch (error) {
            // Manejar errores
            console.error('Error al agregar documento: ', error);
        };
    }

    const limpiarFormulario = () => {
        setFormulario({
            nombre: '',
            cuantos: '',
            fecha: ''
        });
    }

    return (
        <>
            <h1 className='text-bold mt-3'>Diligencia los siguientes datos</h1>
            <form onSubmit={guardarReservacion}>
                <div className="mb-3">
                    <label className="text-bold">Nombre de quien reserva</label>
                    <input type="text" className="form-control" name='nombre' value={formulario.nombre} onChange={handleInputChange} />
                    <div className="text-danger text-bold fst-italic">Esta persona debe presentarse el día de la cita</div>
                </div>
                <div className="mb-3">
                    <label className="text-bold">Cuantas personas?</label>
                    <input type="number" className="form-control" name='cuantos' value={formulario.cuantos} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="text-bold">Fecha de Reserva</label>
                    <input type="date" className="form-control" name='fecha' value={formulario.fecha} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-dark mb-3">Guardar</button>
            </form>
        </>
    );
}

export default Formulario;
