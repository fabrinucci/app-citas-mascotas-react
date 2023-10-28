import { type IFullAppointment } from '../types';

interface Props {
  appointment: IFullAppointment;
  handleDelete: (id: string) => void;
}

export const Appointment = ({ appointment, handleDelete }: Props) => {
  const { id, pet, owner, date, time, symptoms } = appointment;

  return (
    <div className='cita'>
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

      <button className='button eliminar u-full-width' onClick={() => handleDelete(id)}>
        Eliminar &times;
      </button>
    </div>
  );
};
