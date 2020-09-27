import {Component, OnInit} from '@angular/core';
import {PizzasService} from './pizzas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  private pizzas: Pizza[];
  private extras;
  private active = true;

  constructor(private pizzasService: PizzasService) {
  }

  ngOnInit() {
    this.pizzas = this.pizzasService.getPizzas();
    this.pizzasService.getUpdatedPizzas().subscribe((updatedPizzas) => {
      this.pizzas = updatedPizzas;
    });
    this.extras = this.pizzasService.getExtras();
  }

  filterPizzas(tip: string) {
   this.pizzas = this.pizzasService.filteredPizzas(tip);
   this.active = false;
  }

  allPizzas() {
    this.pizzas = this.pizzasService.getPizzas();
    this.active = true;
  }


}
