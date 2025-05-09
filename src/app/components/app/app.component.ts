import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';

import { MessagesComponent } from "../messages/messages.component";

@Component({
  selector: 'app-root',
  imports: [MessagesComponent, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
