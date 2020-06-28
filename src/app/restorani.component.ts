import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-restorani',
  templateUrl: './restorani.component.html',
  styleUrls:['./restorani.component.css']
})
export class RestoranComponent {
  constructor(private dataService: DataService){}
  creditcard: boolean = false;
  Restorani:any[];

  ngOnInit(){
      this.dataService.getRestaurants()
        .subscribe(restorani =>{
            this.Restorani = restorani;
        })
  }

  showMenu(restoran){

      if(restoran.show){
        this.Restorani.forEach((element) =>{
          element.show = false;
         });
      }
      else{
        this.Restorani.forEach((element) =>{
          element.show = false;
         });
         restoran.show = true;
      }
    }

}
