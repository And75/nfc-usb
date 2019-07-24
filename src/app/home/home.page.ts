import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Serial } from '@ionic-native/serial/ngx';
 declare var KNfcAcr122U: any;

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    
    constructor(private serial: Serial, public alertController: AlertController, platform: Platform) {

       
    }

    async presentAlertConfirm(mess) {
        const alert = await this.alertController.create({
        header: 'Confirm!',
        message: mess,
        buttons: [
            {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
                console.log('Confirm Cancel: blah');
            }
            }, {
            text: 'Okay',
            handler: () => {
                console.log('Confirm Okay');
            }
            }
        ]
        });
        await alert.present();
    }



    
    checkUSBSerial() {
        console.log('checkUSBSerial');
            KNfcAcr122U.connect(
                (data) => {
                    console.log(data);
                },(err) => {
                        console.log(err);
                }
        );
        
    }



}
