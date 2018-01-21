export class Message {
    content: string;
    username: string;
    messageId?: string;
    userId?: string;
    priority: Priority;

    constructor(content: string, username: string, priority?: Priority, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
        this.priority = priority;
    }
}

//model schema for priority
export class Priority {
    constructor (
        public manual?: number
    ) {}
}