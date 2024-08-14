import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterModule],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.scss'
})
export class RecipeDetailsComponent {

  email:string ='sandra@chow.com';

  recipeId:any ;
  recipeDetail: any = {};

  constructor(private route: ActivatedRoute, private http: HttpClient){
    this.recipeId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get('https://dummyjson.com/recipes/' + this.recipeId).subscribe(
      (res: any) => {
        this.recipeDetail = res
        console.log(this.recipeDetail)
      },
      (err:any)=>{}
    )
    
  }

}
