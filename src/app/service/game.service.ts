import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'https://api.rawg.io/api';
  private apiKey = '//Chave API';//Chave API

  constructor(private http: HttpClient) {}

  getGames() {
    return this.http.get(`${this.apiUrl}/games?key=${this.apiKey}`);
  }

  getGameById(id: number) {
    return this.http.get(`https://api.rawg.io/api/games/${id}?key=${this.apiKey}`
  );
}
}