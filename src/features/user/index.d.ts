/**
 * User state interface.
 */
export interface IUserState {
  id: string,
  username: string,
  email: string,
  signed: boolean,
  role: RoleEnum | null
}

export enum RoleEnum {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  STUDENT = 'student'
}