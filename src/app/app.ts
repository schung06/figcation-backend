import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recommendations } from "./pages/recommendations/recommendations/recommendations";
import { TripsComponent } from "./pages/trips/trips";
import { NavBar } from "./nav-bar/nav-bar";
import { Dashboard } from "./pages/dashboard/dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recommendations, TripsComponent, NavBar, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('figcation');
}
