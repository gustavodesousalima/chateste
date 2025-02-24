import { Routes } from '@angular/router';
import { ChatPageComponent } from './modules/chat-page/chat-page.component';

export const routes: Routes = [
    { path: 'chat/:conversationid', component: ChatPageComponent }
];
