import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
ngOnInit()
{
 firebase.initializeApp({
   apiKey: "AIzaSyBBAqirZ7dIzKVZ_FumqUIIoj1r-4FZMZ0",
    authDomain: "ng-recipe-book-78502.firebaseapp.com"
 });
}
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
