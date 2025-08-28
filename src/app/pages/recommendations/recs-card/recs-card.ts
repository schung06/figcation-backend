import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recs-card',
  imports: [],
  templateUrl: './recs-card.html',
  styleUrl: './recs-card.css'
})
export class RecsCard {
  @Input() title: string = '';
  @Input() location: string = '';
  @Input() price: string = '';
  @Input() image: string = '';

}
