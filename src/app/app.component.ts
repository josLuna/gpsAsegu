import { Component } from '@angular/core';
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
  constructor() {}
}
