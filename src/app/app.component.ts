import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ConfigFile } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private configFile: ConfigFile) {}

navSelected = 'recipe';

ngOnInit() {
  firebase.initializeApp({
    apiKey: this.configFile.config.apiKey,
    authDomain: this.configFile.config.authDomain
  });
}


onNavigate(featured: string) {
 this.navSelected = featured;

}

}
