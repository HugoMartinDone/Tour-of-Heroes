import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

    constructor(public messageService: MessageService) {}

}
