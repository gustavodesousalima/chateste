import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from '../../../services/chat.service';
import { ServiceAnalysis } from '../../../models/service-analysis.model';

@Component({
  imports: [CommonModule],
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  services: ServiceAnalysis[] = [];
  @Output() serviceSelected = new EventEmitter<string>();

  constructor(private chatService: ChatService) {
    this.chatService.getServices().subscribe(data => this.services = data);
  }

  selectService(id: string | undefined) {
    this.serviceSelected.emit(id);
  }
}