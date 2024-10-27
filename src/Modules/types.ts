export interface UserTypes {
  id: number;
  name: string;
  username?: string;
  phone: string;
  dateCreated?: string;
  status?: string;
  avatar: string;
}
export type UserInputTypes = {
  emailAddress: string;
  password: string;
};

export type UserTypes = {
  id: string;
  fullname: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  department: string;
  username: string;
  password: string;
  confirmPassword: string;
  language: string;
  nhisNumber: string;
  emgName: string;
  emgRelationship: string;
  emgPhone: string;
  emgId: string;
};