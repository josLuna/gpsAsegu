import { Component } from '@angular/core';
import * as firebase from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyCCmL7sCnHzjBKyJ3zoA2UPV5_NngmvhIE",
  authDomain: "desarollomovil-f341a.firebaseapp.com",
  databaseURL: "https://desarollomovil-f341a-default-rtdb.firebaseio.com",
  projectId: "desarollomovil-f341a",
  storageBucket: "desarollomovil-f341a.appspot.com",
  messagingSenderId: "1079974057183",
  appId: "1:1079974057183:web:cc902ce38a6e7795d5c56a"
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/menu/menu', icon: 'home', },
    { title: 'Ajustes', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Temas', url: '/folder/favorites', icon: 'heart' },
    { title: 'Idiomas', url: '/folder/archived', icon: 'archive' },
    { title: 'Lector QR', url: '/folder/trash', icon: 'trash' },
    { title: 'Terminos y Condiciones', url: '/folder/spam', icon: 'warning' },
    { title: 'CPanel', url: '/panel/panel', icon: 'cube' },

    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {
    firebase.initializeApp(firebaseConfig)
  }
}
