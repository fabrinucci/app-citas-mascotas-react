import { useState } from 'react';

console.log('hellor');

export const useAppointment = () => {
  let initValue = JSON.parse(localStorage.getItem('appointments'));
  if (!initValue) {
    initValue = [];
  }

  const [appointments, saveAppointments] = useState(initValue);

  const createAppointment = (appointment) => {
    saveAppointments([...appointments, appointment]);
  };

  return {
    appointments,
    saveAppointments,
    createAppointment,
  };
};
