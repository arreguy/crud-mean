export class User {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  country: string;
  gender: string;
  majority: string;
  _id?: any;

  constructor(firstName: string, lastName: string, password: string, email: string, country: string, gender: string, majority: string) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.password = password,
    this.email = email,
    this.country = country,
    this.gender = gender,
    this.majority = majority
  }
}