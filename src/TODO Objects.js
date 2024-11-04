class ToDo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    setPriority(priority) {
        this.priority = priority;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate;
    }

    info() {
        return "title: " + this.title + "\n" + this.description + "\n";
    }

}

class Project {
    constructor(title, dueDate, toDos) {
        this.title = title;
        this.dueDate = dueDate;
        this.toDos = toDos;
    }

    addToDo(toDo) {
        this.toDos.push(toDo);
    }

    removeToDo(toDo) {
        const index = this.toDos.indexOf(toDo);
        if (index > -1) {
            this.toDos.splice(index, 1);
        }
    }
}

export {ToDo, Project}