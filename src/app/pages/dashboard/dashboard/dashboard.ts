import { Component } from '@angular/core';
import { NavBar } from '../../../nav-bar/nav-bar';


@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [NavBar],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']  
})
export class Dashboard {

}
