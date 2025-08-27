import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toolbar } from "./toolbar/toolbar";

@Component({
  selector: 'app-playground',
  imports: [CommonModule, Toolbar],
  templateUrl: './playground.html',
  styleUrl: './playground.css'
})
export class Playground {

  beaches = [
    {
      name: 'Beach',
      locations: ['PB Beach', 'La Jolla Shores', 'Wind and Sea']
    },
    {
      name: 'Beach',
      locations: ['PB Beach', 'La Jolla Shores', 'Wind and Sea']
    },
    {
      name: 'Beach',
      locations: ['PB Beach', 'La Jolla Shores', 'Wind and Sea']
    }
  ];
}
