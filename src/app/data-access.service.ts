import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './models/animal.model';
import { AnimalsService } from './services/animals.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private httpService:HttpClient,private animalService:AnimalsService)
   { 
     
   }
  saveData(pAnimal:Animal[])
  {
      this.httpService
        .put('https://heroacademy-72e10-default-rtdb.europe-west1.firebasedatabase.app/animals.json', pAnimal
        )
        .subscribe((res:any) => {console.log(res); });
  }
  fetchData()
  {
this.httpService.get<Animal[]>('https://heroacademy-72e10-default-rtdb.europe-west1.firebasedatabase.app/animals.json')
    .pipe(tap((animalList: Animal[]) => {
        if (animalList!=null)
      	this.animalService.setListe(animalList);
      }) ) .subscribe();
 }

}
