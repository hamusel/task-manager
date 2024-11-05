class ToDo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
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
        return this.title + " " + this.description + " - " + this.dueDate;
    }

}

class Project {
    constructor(title, dueDate, toDos, index) {
        this.title = title;
        this.dueDate = dueDate;
        this.toDos = toDos;
        this.index = index;
    }

    getIndex() {
        return this.index;
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

    info() {
        return this.title + " - " + this.dueDate;
    }
}

export {ToDo, Project}