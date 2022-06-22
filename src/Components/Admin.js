import { useAppointment } from "../hooks/useAppointment"
import { Appointment } from "./Appointment"

export const Admin = () => {

  const { appointments } = useAppointment()

  return (
    <div>
      <h1>Admininstra tus citas</h1>
      {
        appointments.map( appointment => (
          <Appointment key={appointment.id} appointment={appointment} />
        ))
      }
    </div>
  )
}
