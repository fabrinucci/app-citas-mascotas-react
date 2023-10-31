export interface IAppointment {
  pet: string;
  owner: string;
  date: string;
  time: string;
  symptoms: string;
}

export interface IFullAppointment extends IAppointment {
  id: string;
}
