import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Animal } from '../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private _listeAnimaux:Animal[]=[]
    listChangedEvent: EventEmitter<Animal[]> = new EventEmitter();
  constructor() 
  {

   }
   getAnimals():Animal[]
   {
     return this._listeAnimaux;
   }
   getAnimal(pAnimal:Animal):Animal
   {
     const animalTrouve = this._listeAnimaux.find(animal=>{return animal.id === pAnimal.id})
    return animalTrouve!;
   }
   createAnimal(pAnimal:Animal)
   {
     console.log('createAnimal:'+pAnimal.race);
     
     this._listeAnimaux.push(pAnimal)
     this.listChangedEvent.emit(this._listeAnimaux)
   }
   setListe(pListeAnimal:Animal[])
   {
     this._listeAnimaux = pListeAnimal;
     
    this.listChangedEvent.emit(this._listeAnimaux)
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
