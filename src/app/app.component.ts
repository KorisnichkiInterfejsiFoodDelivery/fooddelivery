import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodDelivery';

  showRestorani = true;

  toggleRestorani(){
    this.showRestorani = !this.showRestorani;
  }
}
