import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceSangue {

  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:5000/sangue';

  listar() {
    return this.http.get<any[]>(this.apiUrl);
  }

}
