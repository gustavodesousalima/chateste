import { Component, Input, NgModule } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { ServiceAnalysis } from '../../../models/service-analysis.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @Input() selectedServiceId?: string;
  service?: ServiceAnalysis;

  constructor(private chatService: ChatService) {}

  ngOnChanges() {
    if (this.selectedServiceId) {
      this.chatService.getServiceById(this.selectedServiceId).subscribe(service => this.service = service);
    } else {
      this.service = undefined;
    }
  }
}