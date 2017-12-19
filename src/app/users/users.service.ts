import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

  getMe() {
    return {
      fullName: 'Rémi Calixte',
      mail: 'remi.calixte@student.ecp.fr',
      instruments: [
        {
          name: 'Clarinette'
        }
      ]
    }
  }

}
