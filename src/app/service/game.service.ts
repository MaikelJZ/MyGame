import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';//Importa a chave da API

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = environment.rawgApiKey;

  constructor(private http: HttpClient) { }

  pegaJogos() {
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}`);
  }

  jogoPorId(id: number) {
    return this.http.get(`${this.apiUrl}/games/${id}?key=${this.apiKey}`
    );
  }
}