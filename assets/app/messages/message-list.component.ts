import { Component, OnInit } from "@angular/core";

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                   [message]="message"
                    *ngFor="let message of messages"></app-message>
        </div>
        <button type="button"
        class="btn btn-primary" (click)="onAddToAuth()" style="cursor: pointer;">Message Click</button>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];
    forOnAddToAuthBoolean: Boolean = false;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                (messages: Message[]) => {
                    this.messages = messages;
                }
            );
    }

    onAddToAuth() {
        this.messageService.addToAuth(this.forOnAddToAuthBoolean);
            }

}