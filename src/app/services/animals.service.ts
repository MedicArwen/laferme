import { Injectable } from '@angular/core';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private _listeAnimaux:Animal[]=[new Animal('vache'),new Animal('chevre')]
  constructor() 
  {

   }
   recupererListe()
   {
     return this._listeAnimaux;
   }
  ajouter(pAnimal:Animal)
  {
    this._listeAnimaux.push(pAnimal);
  }
  // a faire: supprimer(pAnimal:Animal)
}
