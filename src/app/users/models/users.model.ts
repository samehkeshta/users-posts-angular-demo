export class User {
  id: number = 0;
  name: string = '';
  email: string = '';
  phone?: string;
  address = new Address();
}

export class Address {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
}
