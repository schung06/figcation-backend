import { Component } from '@angular/core';
import { NavBar } from "../../nav-bar/nav-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [NavBar, CommonModule],
  templateUrl: './calendar.html',
  styleUrls: ['./calendar.css']
})
export class Calendar {

  sushiRestaurants = [
    'Sushi Restaurant',
    'Sushi Restaurant',
    'Sushi Restaurant',
    'Sushi Restaurant'
  ];

  hiltonHotels = [
    'Hilton',
    'Hilton',
    'Hilton',
    'Hilton'
  ];

  activities = [
    'Hiking',
    'Hiking',
    'Hiking',
    'Hiking'
  ];
}
