import { Component, OnInit } from '@angular/core';
import{Heros} from '../hero'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 hero:Heros[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log("----",this.hero);
    
  }

}
