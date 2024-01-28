import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { B1Component } from './b1/b1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, B1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab5';
}
