import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Chat {
  @ViewChild("content") content: any;
  userName: string = "";
  message: string = "";
  messages = [];

  constructor(public navCtrl: NavController) {
    this.getMessages();
  }

  getMessages() {
    let messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.on("value", (snap) => {
        let data = snap.val();

        // Manejar el caso en que data es null o undefined
        if (data) {
            this.messages = Object.values(data);
        } else {
            this.messages = [];
        }

        this.scrollToBottom();
    });
}

scrollToBottom() {
    let contentEnd = document.getElementById("content-end");

    if (contentEnd) {
        let offsetTop = contentEnd.offsetTop;
        this.content.scrollTo(0, offsetTop, 300);
    } else {
        console.error("El elemento con ID 'content-end' no existe.");
    }
}

  sendMessage(){
    let messagesRef = firebase.database().ref().child("mensajes");
    messagesRef.push({mensaje: this.message, nombre: this.userName });
    this.message = "";
  }
}