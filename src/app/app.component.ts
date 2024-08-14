import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./reuseable/header/header.component";
import { FooterComponent } from "./reuseable/footer/footer.component";
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { RecipeDetailsComponent } from "./pages/recipe-details/recipe-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, HeaderComponent, FooterComponent, HomeComponent, RecipeDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projects';
}
