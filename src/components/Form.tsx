import { type ChangeEvent, type FormEvent } from 'react';
import { type IFullAppointment } from '../types';
import { useForm } from '../hooks/useForm';

interface Props {
  createAppointment: (appointment: IFullAppointment) => void;
}

export const Form = ({ createAppointment }: Props) => {
  const { appointment, error, addAppointment, updateAppointment, resetValues, updateError } =
    useForm({ createAppointment });

  const { pet, owner, date, time, symptoms } = appointment;

  const validateEntry = () => {
    return (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateEntry()) return updateError(true);

    updateError(false);
    addAppointment();
    resetValues();
  };

  return (
    <section className='one-half column'>
      <h1>Crear Cita</h1>

      {error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null}

      <form onSubmit={handleSubmit}>
        <label>Nombre de la Mascota</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Nombre de la mascota'
          onChange={handleChange}
          value={pet}
        />

        <label>Nombre del Propietario</label>
        <input
          type='text'
          name='owner'
          className='u-full-width'
          placeholder='Nombre del propietario'
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

        <button className='u-full-width button-primary'>Agregar Cita</button>
      </form>
    </section>
  );
};
