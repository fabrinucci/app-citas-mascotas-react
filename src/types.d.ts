export interface IAppointment {
  pet: string;
  owner: string;
  date: srtring;
  time: string;
  symptoms: string;
}

export interface IFullAppointment extends IAppointment {
  id: string;
}
