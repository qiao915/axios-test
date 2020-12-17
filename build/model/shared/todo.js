"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor(data) {
        this.userId = data.userId;
        this.title = data.title;
        this.completed = data.completed;
        this.id = data.id;
    }
}
exports.Todo = Todo;
