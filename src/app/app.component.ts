import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

navSelected = 'recipe';


onNavigate(featured : string){

	this.navSelected=featured;

}
 
}
