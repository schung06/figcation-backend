import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Recommendations } from "./pages/recommendations/recommendations/recommendations";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Recommendations],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('figcation');
}
