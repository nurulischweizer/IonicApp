import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonRippleEffect,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  ellipsisHorizontalOutline,
  homeOutline,
  listOutline,
  personCircleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonIcon,
    IonRippleEffect,
  ],
})
export class HomePage {
  items: any[] = [
    {
      title: 'Condominium',
      image: 'assets/building.png',
    },
    {
      title: 'Landed Property',
      image: 'assets/home.png',
    },
    {
      title: 'Residential Apartment',
      image: 'assets/apartment.jpg',
    },
  ];

  constructor() {
    addIcons({
      homeOutline,
      listOutline,
      personCircleOutline,
      ellipsisHorizontalOutline,
    });
  }
}
