import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import restaurantRecsData from './restaurant-recs.json';
import activitiesRecsData from './activities-recs.json';
import { RecsCard } from "../recs-card/recs-card";


@Component({
  selector: 'app-recommendations',
  imports: [CommonModule, RecsCard],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css'
})
export class Recommendations {
  restaurantRecs = restaurantRecsData;
  activitiesRecs = activitiesRecsData;
}





