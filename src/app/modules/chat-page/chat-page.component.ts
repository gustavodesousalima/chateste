import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-chat-page',
  imports: [SidebarComponent, ChatComponent],
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent {
  selectedServiceId?: string;

  selectService(id?: string) {
    this.selectedServiceId = id;
  }
}