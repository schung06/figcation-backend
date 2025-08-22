import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Trip {
  id: number;
  destination: string;
  startDate: string;
  endDate: string;
  daysAway: number;
  participants: number;
}

@Component({
  selector: 'app-trips',
  standalone: true,            
  imports: [CommonModule],      
  templateUrl: './trips.html',
  styleUrls: ['./trips.css']
})
export class TripsComponent {
  activeTab: 'current' | 'old' = 'current';

  trips: Trip[] = [
    { id: 1, destination: 'Italy', startDate: '2025-10-20', endDate: '2025-10-30', daysAway: 10, participants: 2 },
    { id: 2, destination: 'France', startDate: '2025-08-01', endDate: '2025-08-10', daysAway: 9, participants: 3 }
  ];

  get filteredTrips(): Trip[] {
    const today = new Date();
    return this.trips.filter(trip => 
      this.activeTab === 'current' 
        ? new Date(trip.endDate) >= today 
        : new Date(trip.endDate) < today
    );
  }

  switchTab(tab: 'current' | 'old') {
    this.activeTab = tab;
  }

  addTrip() {
    console.log('Add trip clicked');
  }
}