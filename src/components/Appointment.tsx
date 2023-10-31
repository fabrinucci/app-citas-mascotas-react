import { type IFullAppointment } from '../types';

interface Props {
  appointment: IFullAppointment;
  deleteAppointment: (id: string) => void;
}

export const Appointment = ({ appointment, deleteAppointment }: Props) => {
  const { id, pet, owner, date, time, symptoms } = appointment;

  return (
    <div className='appointment'>
      <p>
        Mascota: <span>{pet}</span>
      </p>
      <p>
        Propietario: <span>{owner}</span>
      </p>
      <p>
        Fecha: <span>{date}</span>
      </p>
      <p>
        Hora: <span>{time}</span>
      </p>
      <p>
        Síntomas: <span>{symptoms}</span>
      </p>

      <button className='button eliminar u-full-width' onClick={() => deleteAppointment(id)}>
        Eliminar &times;
      </button>
    </div>
  );
};
