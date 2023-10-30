import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { IAppointment, type IFullAppointment } from '../types';
import { initialValue } from '../utils';

interface Props {
  createAppointment: (appointment: IFullAppointment) => void;
}

export const useForm = ({ createAppointment }: Props) => {
  const [appointment, setAppointment] = useState<IAppointment>(initialValue);
  const [error, setError] = useState<boolean>(false);

  const addAppointment = () => {
    const newAppointment: IFullAppointment = {
      ...appointment,
      id: uuid(),
    };

    createAppointment(newAppointment);
  };

  const updateAppointment = (appointment: IAppointment) => {
    setAppointment(appointment);
  };

  const resetValues = () => {
    setAppointment(initialValue);
  };

  const updateError = (value: boolean) => {
    setError(value);
  };

  return {
    appointment,
    error,
    addAppointment,
    updateError,
    resetValues,
    updateAppointment,
  };
};
