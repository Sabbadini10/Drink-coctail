import { Injectable } from '@angular/core';
import Drink from '../interfaces/drink.interfaces';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private firestore: Firestore) { }

  agregarDrink(drink: Drink) {
    const drinkRef = collection(this.firestore, 'drink')
    return addDoc(drinkRef, drink)
}

}
