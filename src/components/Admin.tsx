import { IFullAppointment } from '../types';
import { Appointment } from './Appointment';

interface Props {
  appointments: IFullAppointment[];
  deleteAppointment: (id: string) => void;
}

export const Admin = ({ appointments, deleteAppointment }: Props) => {
  const title = appointments.length === 0 ? 'No hay Citas agregadas' : 'Admininstra tus citas';

  return (
    <section className='one-half column'>
      <h1>{title}</h1>
      <div>
        {appointments.map((appointment) => (
          <Appointment
            key={appointment.id}
            appointment={appointment}
            deleteAppointment={deleteAppointment}
          />
        ))}
      </div>
    </section>
  );
};
