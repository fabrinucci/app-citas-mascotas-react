import { useAppointment } from '../hooks/useAppointment';
import { Appointment } from './Appointment';
import { Form } from './Form';

export const HomePage = () => {
  const { appointments, createAppointment, deleteAppointment } = useAppointment();

  const title = appointments.length === 0 ? 'No hay Citas agregadas' : 'Admininstra tus citas';

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
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
