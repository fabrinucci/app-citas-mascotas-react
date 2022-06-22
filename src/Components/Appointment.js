
import PropTypes from 'prop-types';

export const Appointment = ({ appointment, handleDelete }) => {

  const { pet, owner, date, time, symptoms } = appointment

  return (
    <div className='cita'>
      <p>Mascota: <span>{ pet }</span></p>
      <p>Propietario: <span>{ owner }</span></p>
      <p>Fecha: <span>{ date }</span></p>
      <p>Hora: <span>{ time }</span></p>
      <p>Síntomas: <span>{ symptoms }</span></p>

      <button
        className="button eliminar u-full-width"
        onClick={ () => handleDelete(appointment.id) }
      >
        Eliminar &times;
      </button>
    </div>
  )
}

Appointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired
}