import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is but a test', 'https://media2.fdncms.com/riverfronttimes/imager/u/blog/2647054/throwback0208108_thumb_510x382.jpg?cb=1511296748')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
