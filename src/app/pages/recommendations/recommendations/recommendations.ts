import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import recsData from './recs-data.json';
import { RecsCard } from "../recs-card/recs-card";


@Component({
  selector: 'app-recommendations',
  imports: [CommonModule, RecsCard],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css'
})
export class Recommendations {
    recs = recsData;
}





