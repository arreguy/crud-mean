export class User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  _id?: any;

  constructor(firstName: string, lastName: string, password: string, email: string) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.password = password,
    this.email = email
  }
}