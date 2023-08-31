import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterManagementService<T> {
  constructor() {}

  saveLocalStorage(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key: string): T {
    return typeof localStorage.getItem(key) === 'string' &&
      JSON.parse(localStorage.getItem(key) as string);
  }
}
