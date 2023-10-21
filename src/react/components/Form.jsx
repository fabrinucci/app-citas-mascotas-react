import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

const Form = ({ createAppointment }) => {
  const initialValue = {
    pet: '',
    owner: '',
    date: '',
    time: '',
    symptoms: '',
  };

  const [appointment, updateAppointment] = useState(initialValue);

  const [error, updateError] = useState(false);

  const handleChange = (e) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, time, symptoms } = appointment;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      updateError(true);
      return;
    }

    updateError(false);

    appointment.id = uuid();
    createAppointment(appointment);

    updateAppointment(initialValue);
  };

  return (
    <>
      <h1>Crear Cita</h1>

      {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

      <form onSubmit={handleSubmit}>
        <label>Nombre de la Mascota</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre de tu amigo peludo'
          onChange={handleChange}
          value={pet}
        />

        <label>Nombre del Propietario</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre del tutor legal :)'
          onChange={handleChange}
          value={owner}
        />

        <label>Fecha</label>
        <input
          type='date'
          name='date'
          className='u-full-width'
          onChange={handleChange}
          value={date}
        />

        <label>Hora</label>
        <input
          type='time'
          name='time'
          className='u-full-width'
          onChange={handleChange}
          value={time}
        />

        <label>Síntomas</label>
        <textarea
          name='symptoms'
          className='u-full-width'
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button className='u-full-width button-primary' type='submit'>
          Agregar Cita
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  createAppointment: PropTypes.func.isRequired,
};

export default Form;
