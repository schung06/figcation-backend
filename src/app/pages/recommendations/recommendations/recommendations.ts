import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RecommendationCard {
  id: number;
  title: string;
  userInitials: string;
}

@Component({
  selector: 'app-recommendations',
  imports: [CommonModule],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css'
})
export class Recommendations {



}
