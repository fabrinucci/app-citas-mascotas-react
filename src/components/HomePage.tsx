import { useAppointment } from '../hooks/useAppointment';
import { Admin } from './Admin';
import { Form } from './Form';

export const HomePage = () => {
  const { appointments, createAppointment, deleteAppointment } = useAppointment();

  return (
    <main>
      <h1>Administrador de Pacientes</h1>
      <div className='container'>
        <div className='row'>
          <Form createAppointment={createAppointment} />
          <Admin appointments={appointments} deleteAppointment={deleteAppointment} />
        </div>
      </div>
    </main>
  );
};
