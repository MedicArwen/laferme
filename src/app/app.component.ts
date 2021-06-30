import { Component } from '@angular/core';
import { Animal } from './models/animal.model';
import { AnimalsService } from './services/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listeAnimaux:Animal[]=[]
  title = 'laferme';
  constructor(private animauxService:AnimalsService)
  {
    this.listeAnimaux = this.animauxService.recupererListe();
  }
}
