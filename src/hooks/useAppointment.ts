import { useState } from 'react';
import { type IFullAppointment } from '../types';

export const useAppointment = () => {
  let initValue: IFullAppointment[] | [] = JSON.parse(localStorage.getItem('appointments')!);

  if (!initValue) {
    initValue = [];
  }

  const [appointments, saveAppointments] = useState<IFullAppointment[]>(initValue!);

  const createAppointment = (appointment: IFullAppointment) => {
    saveAppointments([...appointments, appointment]);
  };

  return {
    appointments,
    saveAppointments,
    createAppointment,
  };
};
