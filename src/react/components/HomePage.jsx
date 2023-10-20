import { useEffect } from 'react';
import { useAppointment } from '../hooks/useAppointment';
import { Appointment } from './Appointment';
import Form from './Form';

export const HomePage = () => {
  const { appointments, saveAppointments, createAppointment } =
    useAppointment();

  useEffect(() => {
    let initValue = JSON.parse(localStorage.getItem('appointments'));

    if (initValue) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments]);

  const handleDelete = (id) => {
    const newAppointment = appointments.filter(
      (appointment) => appointment.id !== id
    );
    saveAppointments(newAppointment);
  };

  const title =
    appointments.length === 0
      ? 'No hay Citas agregadas'
      : 'Admininstra tus citas';

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createAppointment={createAppointment} />
          </div>
          <div className='one-half column'>
            <h1>{title}</h1>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
