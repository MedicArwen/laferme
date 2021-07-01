import { Component, OnInit } from '@angular/core';
import { DataAccessService } from './data-access.service';
import { Animal } from './models/animal.model';
import { AnimalsService } from './services/animals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  listeAnimaux:Animal[]=[]
  title = 'laferme';
  constructor(private animauxService:AnimalsService,private dataAccess:DataAccessService)
  {
    
    this.dataAccess.fetchData();
    
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    
   /* this.heroService.listChangedEvent.subscribe((pHeroList:Hero[])=>
    {
     this.dataService.saveData(pHeroList)
      this.listHeroes = pHeroList;
 
    });*/
    this.animauxService.listChangedEvent.subscribe((animalListe:Animal[])=>
    {
      console.log('call back: change');
      this.dataAccess.saveData(animalListe);
      this.listeAnimaux = animalListe;
    })
  }
}
