import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonItem } from '@ionic/angular/standalone';
import { PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private readonly personajesService = inject(PersonajesService)
  personaje: Personajes[] = 
  constructor() {}

  ngOnInit(): void {
      this.personajes.cargar().subscribe(
        (listado) => {
          console.log(listado)
        }
      ); //aqui no estamos mandando nada de pagina
  }
}
