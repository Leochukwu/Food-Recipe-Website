import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, CarouselModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class  HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['Prev', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  email:string = 'sandra@chow.com'


  Recipes: any = []
  item: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getRecipe()
  }


  getRecipe(){
    this.http.get('https://dummyjson.com/recipes?limit=9').subscribe(
      (res:any)=>{
        this.Recipes = res.recipes
        console.log(this.Recipes)
      },
      (err: any)=>{}
    )
  }
}
