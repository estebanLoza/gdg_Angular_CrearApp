import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';



export interface Personaje{
  id: number;
  name: string;
  species: string;
  image: string;
}

export interface PersonajesResult{
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  }
  results: Array<Personaje>;
}


@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private readonly http = inject(HttpClient);

  constructor() { }
  
    cargar(){
      
      return this.http.get<PersonajesResult>(
        'https://rickandmortyapi.com/api/character'
      ).pipe(
      );
  }

}
