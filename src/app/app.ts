import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recommendations } from "./pages/recommendations/recommendations/recommendations";
import { TripsComponent } from "./pages/trips/trips";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recommendations, TripsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('figcation');
}
