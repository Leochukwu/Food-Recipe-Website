import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RecipeDetailsComponent } from './pages/recipe-details/recipe-details.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'recipeDetails/:id', component: RecipeDetailsComponent}
    
];
