import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.page.html',
  styleUrls: ['./recovery.page.scss'],
})
export class RecoveryPage {

  constructor(public toastController: ToastController) {}

  sendRecoveryEmail() {
    // Aquí puedes agregar la lógica para enviar el correo de recuperación.
    // Por ejemplo, puedes mostrar un mensaje de éxito o error utilizando ToastController.
    this.presentToast('Correo de recuperación enviado con éxito');
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}

