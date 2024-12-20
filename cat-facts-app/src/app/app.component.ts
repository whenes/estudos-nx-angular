import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CatFactsComponent } from './cat-facts/cat-facts.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HttpClientModule, CatFactsComponent]
})
export class AppComponent {
  title = 'cat-facts-app';
}
