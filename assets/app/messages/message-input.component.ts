import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { MessageService } from "./message.service";
import {Message, Priority} from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})
export class MessageInputComponent implements OnInit {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        if (this.message) {
            // Edit
            this.message.content = form.value.content;
            // updated the priority if exists
            this.message.priority.manual = form.value.manual;
            this.messageService.updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                );
            this.message = null;
        } else {
            // Create
            //added additional parameter for priority property
            const message = new Message(form.value.content, 'Max', new Priority(parseInt(form.value.manual)));
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }
}