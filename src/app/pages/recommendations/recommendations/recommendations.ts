import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-recommendations',
  imports: [CommonModule],
  templateUrl: './recommendations.html',
  styleUrl: './recommendations.css'
})
export class Recommendations {
    restaurants = [
    { id: 1, name: 'Restaurant A', rating: 4.5, reviews: 129, tags: ['Kid friendly', 'Air-conditioned'] },
    { id: 2, name: 'Restaurant B', rating: 4.0, reviews: 80, tags: ['Amazing food', 'Stroller accessible'] },
    { id: 3, name: 'Restaurant C', rating: 3.8, reviews: 42, tags: ['Coloring sheets'] },
    { id: 4, name: 'Restaurant D', rating: 4.6, reviews: 220, tags: ['High chairs available'] }
  ];

  activities = [
    { id: 1, name: 'Hiking Trail', rating: 4.8, reviews: 90 },
    { id: 2, name: 'Museum Visit', rating: 4.3, reviews: 40 },
    { id: 3, name: 'Boat Ride', rating: 4.7, reviews: 70 }
  ];

  activePage: 'overview' | 'restaurants' | 'activities' = 'overview';

  @ViewChild('restaurantsScroll', { static: false }) restaurantsScroll!: ElementRef<HTMLDivElement>;
  @ViewChild('activitiesScroll', { static: false }) activitiesScroll!: ElementRef<HTMLDivElement>;

  goToPage(page: 'restaurants' | 'activities') {
    this.activePage = page;
  }

  backToOverview() {
    this.activePage = 'overview';
  }

  scrollRight(section: 'restaurants' | 'activities') {
    const element = section === 'restaurants' ? this.restaurantsScroll.nativeElement : this.activitiesScroll.nativeElement;
    element.scrollBy({ left: 250, behavior: 'smooth' });
  }

  scrollLeft(section: 'restaurants' | 'activities') {
    const element = section === 'restaurants' ? this.restaurantsScroll.nativeElement : this.activitiesScroll.nativeElement;
    element.scrollBy({ left: -250, behavior: 'smooth' });
  }


}
