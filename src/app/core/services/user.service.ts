import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Config } from '../models/config.model';

@Injectable()
export class UserService {

  config: Config = {
    apiUrl : 'https://jsonplaceholder.typicode.com'
  };

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(`${this.config.apiUrl}/users`);
  }

  getUser(id) {
    return this.httpClient.get(`${this.config.apiUrl}/users/${id}`);
  }

}
