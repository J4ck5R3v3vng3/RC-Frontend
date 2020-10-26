import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Cuisine } from 'src/app/Entity/ENUM_Cuisine';
import { DietType } from 'src/app/Entity/ENUM_DietType';
import { DishType } from 'src/app/Entity/ENUM_DishType';

@Component({
  selector: 'app-home-dropdowns',
  templateUrl: './home-dropdowns.component.html',
  styleUrls: ['./home-dropdowns.component.css']
})
export class HomeDropdownsComponent implements OnInit {

  dietTypeForm = new FormGroup({});
  dishTypeForm = new FormGroup({});
  cuisineForm = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

  dietType = DietType;
  cuisine = Cuisine;
  dishType = DishType;

}
