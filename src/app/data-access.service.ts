import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from './models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class DataAccessService {

  constructor(private httpService:HttpClient)
   { 
     
   }
  saveData(pAnimal:Animal[])
  {
      this.httpService
        .put('https://heroacademy-72e10-default-rtdb.europe-west1.firebasedatabase.app/animals.json', pAnimal
        )
        .subscribe((res:any) => {console.log(res); });
  }

}
