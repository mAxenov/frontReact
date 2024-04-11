export type TLoginData = { email: string; password: string };
export type TRegistrData = { name: string; contactPhone: string } & TLoginData;
export type TUser = {
  email: string;
  name: string;
  contactPhone: string;
  role: string;
};
