import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  public pizzas: Pizza[] =  [
     {
      nume: 'Box Crispy',
      ingrediente1: 'crispy',
      ingrediente2: 'cartofi prăjiți',
      imagine: '../../../../assets/Images/Box.png',
      pret: 30,
      gramajCrispy1: 300,
      gramajCrispy2: 200,
      tip: 'pui',
      crispy: true,
      box: true
    },
     {
      nume: 'Box Aripi',
      ingrediente1: 'aripi',
      ingrediente2: 'cartofi prăjiți',
      imagine: '../../../../assets/Images/Box.png',
      pret: 30,
      gramajCrispy1: 300,
      gramajCrispy2: 200,
      tip: 'pui',
      crispy: true,
      box: true
    },
    {
      nume: 'Box Mozzarella',
      ingrediente1: 'mozzarella',
      ingrediente2: 'cartofi prăjiți',
      imagine: '../../../../assets/Images/Box_mozzarella.png',
      pret: 25,
      gramajCrispy1: 300,
      gramajCrispy2: 200,
      tip: 'vegetariana',
      crispy: true,
      box: true
    },
     {
      nume: 'Bucket Aripi/Crispy',
      ingrediente1: 'aripi',
      ingrediente2: 'crispy',
      imagine: '../../../../assets/Images/Bucket.png',
      pret: 55,
      gramajCrispy1: 500,
      gramajCrispy2: 500,
      tip: 'pui',
      crispy: true,
      bucket: true
    },
     {
      nume: 'Bucket Aripi/Mozzarella',
      ingrediente1: 'aripi',
      ingrediente2: 'mozzarella',
      imagine: '../../../../assets/Images/Bucket.png',
      pret: 55,
      gramajCrispy1: 500,
      gramajCrispy2: 500,
      tip: 'pui',
      crispy: true,
      bucket: true
    },
     {
      nume: 'Bucket Crispy/Mozzarella',
      ingrediente1: 'crispy',
      ingrediente2: 'mozzarella',
      imagine: '../../../../assets/Images/Bucket.png',
      pret: 55,
      gramajCrispy1: 500,
      gramajCrispy2: 500,
      tip: 'pui',
      crispy: true,
      bucket: true
    },
    {
      nume: 'Pizza Casei',
      ingrediente: 'Sos de Roșii, Mozarella, Șuncă De Praga, Cașcaval, Ardei, Ciuperci, Prosciutto Crudo, Parmezan',
      pretMedie: 40,
      pretMare: 75,
      imagine: '../../../../assets/Images/casei.png',
      tip: 'porc',
      gramajMedie: 700,
      gramajMare: 1450
    },
    {
      nume: 'Pizza Quatro Formaggi',
      ingrediente: 'Sos Alb, Mozzarella, Gorgonzola, Ricotta, Parmezan, Oregano, Ulei De Măsline',
      pretMedie: 27,
      pretMare: 52,
      imagine: '../../../../assets/Images/quatro-formaggi.png',
      tip: 'vegetariana',
      gramajMedie: 460,
      gramajMare: 980
    },
    {
      nume: 'Pizza Quatro Stagioni',
      ingrediente: 'Sos De Roșii, Mozzarella, Șuncă De Praga, Salam, Ciuperci, Ardei',
      pretMedie: 27,
      pretMare: 53,
      imagine: '../../../../assets/Images/quatro-stagioni.png',
      tip: 'porc',
      gramajMedie: 600,
      gramajMare: 1250
    },
    {
      nume: 'Pizza Deliziosa',
      ingrediente: 'Sos De Roșii, Mozzarella, Șuncă De Praga, Salam, Ananas, Cremă De Brânză',
      pretMedie: 32,
      pretMare: 60,
      imagine: '../../../../assets/Images/placeholder.png',
      tip: 'porc',
      gramajMedie: 700,
      gramajMare: 1400
    },
    {
      nume: 'Pizza Capriciosa',
      ingrediente: 'Sos De Roșii, Cașcaval, Șuncă, Ciuperci, Măsline, Peperoni, Mozarella',
      pretMedie: 30,
      pretMare: 55,
      imagine: '../../../../assets/Images/capriciosa.png',
      tip: 'porc',
      gramajMedie: 650,
      gramajMare: 1350
    },
    {
      nume: 'Pizza Carbonara',
      ingrediente: 'Sos De Roșii, Mozarella, Bacon, Smântână, Parmezan, Ou',
      pretMedie: 32,
      pretMare: 55,
      imagine: '../../../../assets/Images/placeholder.png',
      tip: 'porc',
      gramajMedie: 650,
      gramajMare: 1350
    },
    {
      nume: 'Pizza Roma',
      ingrediente: 'Sos De Roșii, Mozarella, Șuncă De Praga, Cârnați, Salam, Usturoi, Gogoșari, Carciofi, Măsline',
      pretMedie: 30,
      pretMare: 55,
      imagine: '../../../../assets/Images/placeholder.png',
      tip: 'porc',
      gramajMedie: 720,
      gramajMare: 1450
    },
    {
      nume: 'Pizza Țărănească',
      ingrediente: 'Sos De Roșii, Mozarella, Cârnați, Bacon, Ardei, Telemea, Ciuperci, Ceapă',
      pretMedie: 30,
      pretMare: 54,
      imagine: '../../../../assets/Images/placeholder.png',
      tip: 'porc',
      gramajMedie: 690,
      gramajMare: 1400
    },
    {
      nume: 'Pizza Cardinale',
      ingrediente: 'Sos De Roșii, Mozarella, Bacon, Salam Picant, Cremă De Brânză, Ciuperci, Măsline, Ardei Iuți',
      pretMedie: 35,
      pretMare: 67,
      imagine: '../../../../assets/Images/placeholder.png',
      tip: 'porc',
      gramajMedie: 750,
      gramajMare: 1500
    },
    {
      nume: 'Pizza Salami',
      ingrediente: 'Sos De Roșii, Cașcaval, Salami Italia, Mozarella',
      pretMedie: 26,
      pretMare: 47,
      imagine: '../../../../assets/Images/salami.png',
      tip: 'porc',
      gramajMedie: 550,
      gramajMare: 1000
    },
    {
      nume: 'Pizza Junior',
      ingrediente: 'Sos De Roșii, Mozarella, Șuncă De Praga, Ananas, Porumb',
      pretMedie: 26,
      pretMare: 50,
      imagine: '../../../../assets/Images/junior.png',
      tip: 'porc',
      gramajMedie: 680,
      gramajMare: 1400
    },
    {
      nume: 'Pizza Cu Pui',
      ingrediente: 'Sos De Roșii, Mozzarela, Șuncă De Pui, Piept De Pui Afumat, Oregano',
      pretMedie: 29,
      pretMare: 55,
      imagine: '../../../../assets/Images/Chicken.png',
      tip: 'pui',
      gramajMedie: 630,
      gramajMare: 1300
    },
    {
      nume: 'Pizza Capricciosa Pui',
      ingrediente: 'Sos De Roșii, Mozarella, Cașcaval, Șuncă De Pui, Ciuperci, Piept De Pui Afumat, Măsline',
      pretMedie: 32,
      pretMare: 58,
      imagine: '../../../../assets/Images/chickenCapriciosa.png',
      tip: 'pui',
      gramajMedie: 660,
      gramajMare: 1350
    },
    {
      nume: 'Pizza Diavola',
      ingrediente: 'Sos De Roșii, Cașcaval, Salam Picant, Ulei De Masilne Cu Ardei, Mozarella',
      pretMedie: 29,
      pretMare: 55,
      imagine: '../../../../assets/Images/diavola.png',
      tip: 'porc',
      gramajMedie: 560,
      gramajMare: 1150
    },
    {
      nume: 'Pizza Prosciutto',
      ingrediente: 'Sos De Roșii, Cașcaval, Prosciutto Praga, Mozarella',
      pretMedie: 25,
      pretMare: 45,
      imagine: '../../../../assets/Images/Prosciutto.png',
      tip: 'porc',
      gramajMedie: 560,
      gramajMare: 1150
    },
    {
      nume: 'Pizza Prosciutto e Funghi',
      ingrediente: 'Sos De Roșii, Mozzarella, Prosciutto Praga, Ciuperci',
      pretMedie: 27,
      pretMare: 48,
      imagine: '../../../../assets/Images/prosciutto-funghi.png',
      tip: 'porc',
      gramajMedie: 600,
      gramajMare: 1250
    },
    {
      nume: 'Pizza Vegetariană 1',
      ingrediente: 'Sos De Roșii, Mozarella, Masiline, Porumb, Ardei, Ciuperci',
      pretMedie: 23,
      pretMare: 46,
      imagine: '../../../../assets/Images/pizza.jpg',
      tip: 'vegetariana',
      gramajMedie: 580,
      gramajMare: 1200
    },
    {
      nume: 'Pizza Vegetariană 2',
      ingrediente: 'Sos De Roșii, Mozarella, Ardei, Anghinare, Capere',
      pretMedie: 30,
      pretMare: 56,
      imagine: '../../../../assets/Images/veggie1.png',
      tip: 'vegetariana',
      gramajMedie: 700,
      gramajMare: 1450
    },
    {
      nume: 'Pizza Margherita',
      ingrediente: 'Sos De Roșii, Mozarella, Busuioc',
      pretMedie: 19,
      pretMare: 35,
      imagine: '../../../../assets/Images/Margherita.png',
      tip: 'vegetariana',
      gramajMedie: 400,
      gramajMare: 950
    },
    {
      nume: 'Pizza Tonno E Cipolla',
      ingrediente: 'Sos De Roșii, Mozarella, Ton, Ceapă, Capere, Măsline',
      pretMedie: 32,
      pretMare: 60,
      imagine: '../../../../assets/Images/tonno.png',
      tip: 'peste',
      gramajMedie: 640,
      gramajMare: 1350
    },
    {
      nume: 'Pizza Noastră',
      ingrediente: 'Mozarella, Cașcaval, Șuncă De Praga, Ciuperci, Usturoi',
      pretMedie: 29,
      pretMare: 55,
      imagine: '../../../../assets/Images/pizzaNoastra.png',
      tip: 'porc',
      gramajMedie: 550,
      gramajMare: 1150
    },
    ];
  public extras = [
    {
      nume: "Cartofi Prăjiți",
      gramaj: 200,
      pret: 5,
      crispy: true
    },
    {
      nume: "Sos Maioneză",
      gramaj: 80,
      pret: 5,
      crispy: true
    },
    {
      nume: "Sos Usturoi",
      gramaj: 80,
      pret: 5,
      crispy: true
    },
    {
      nume: "Sos Picant",
      gramaj: 80,
      pret: 5,
      crispy: true
    },
    {
      nume: "Sos Verdețuri",
      gramaj: 80,
      pret: 5,
      crispy: true
    },
    {
      nume: 'Șuncă De Praga',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Salam',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Bacon',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Prosciutto Crudo',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Cârnați',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Șuncă De Pui',
      pretMediu: 3,
      pretXXL: 5
    },
    {
      nume: 'Piept De Pui Afumat',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Ton',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Mozarella',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Măsline',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Ciuperci',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Porumb',
      pretMediu: 3,
      pretXXL: 5,
    },
    {
      nume: 'Anghinare',
      pretMediu: 3,
      pretXXL: 5,
    },
  ];
  private updatedPizzas = new Subject<Pizza[]> ();

  getPizzas() {
    return this.pizzas;
  }
  getUpdatedPizzas() {
    return this.updatedPizzas.asObservable();
  }
  getExtras() {
    return this.extras;
  }
  filteredPizzas(tipPizza: string) {
    const filteredPizzas = this.pizzas.filter(pizza => pizza.tip === tipPizza);
    return filteredPizzas;
  }

  constructor() { }
}
