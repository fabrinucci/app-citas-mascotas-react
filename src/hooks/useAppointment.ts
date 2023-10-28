import { useEffect, useState } from 'react';
import { type IFullAppointment } from '../types';

export const useAppointment = () => {
  let initValue: IFullAppointment[] | [] = JSON.parse(localStorage.getItem('appointments')!) || [];

  const [appointments, saveAppointments] = useState<IFullAppointment[]>(initValue!);

  const createAppointment = (appointment: IFullAppointment) => {
    saveAppointments([...appointments, appointment]);
  };

  const handleDelete = (id: string) => {
    const newAppointment = appointments.filter((appointment) => appointment.id !== id);
    saveAppointments(newAppointment);
  };

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments || []));
  }, [appointments]);

  return {
    appointments,
    saveAppointments,
    createAppointment,
    handleDelete,
  };
};
