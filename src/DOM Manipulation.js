function createElement(tag, classes = [], attributes = {}) {
    const element = document.createElement(tag);
    classes.forEach(cls => element.classList.add(cls));
    Object.keys(attributes).forEach(attr => element.setAttribute(attr, attributes[attr]));
    return element;
}


class ProjectsHandler {
    constructor() {
        this.projectsList = document.getElementById('projects-list');
    }

    getProjects() {
        return this.projectsList;
    }

    addProject(project) {
        const projectItem = document.createElement('li');
        projectItem.classList.add('project');
        projectItem.innerText = project.title + ' - ' + project.dueDate;
        this.projectsList.appendChild(projectItem);
        //TODO: do something with toDos of projectItem
    }

    removeProject(project) {
        this.projectsList.removeChild(project);
    }
}

class ToDosHandler {
    constructor() {
        this.toDosList = document.getElementById('toDos-list');
        this.popup = document.getElementById('popup');
        this.openPopupButton = document.getElementById('openPopup');
        this.addButton = document.getElementById('addButton');
        this.closeButton = document.getElementById('closeButton');

        this.openPopupButton.addEventListener("click", () => this.openPopup());
        this.closeButton.addEventListener("click", () => this.closePopup());
        this.addButton.addEventListener("click", () => this.addToDo())
    }

    getProjects() {
        return this.toDosList;
    }

    addToDo() {

        const title = document.getElementById('title').value;
        const dueDate = document.getElementById('dueDate').value;

        const toDoItem = document.createElement('li');
        toDoItem.classList.add('toDo');
        toDoItem.innerText = toDo.title + ' - ' + toDo.dueDate;
        this.toDosList.appendChild(toDoItem);
        //TODO: do something with toDos of projectItem
    }

    openInputDiv() {
        const inputDiv = document.createElement("div");
        inputDiv.classList.add("inputDiv");

        addButton.addEventListener("click", () => {

        })

        const title = document.getElementById('title').value;
        const dueDate = document.getElementById('dueDate').value;

        const toDoItem = document.createElement('li');
        toDoItem.classList.add('toDo');
        toDoItem.innerText = `${title} - ${dueDate}`;
        this.toDosList.appendChild(toDoItem);

        this.closePopup();
    }

    removeToDo(toDo) {
        this.toDosList.removeChild(toDo);
    }

    openPopup() {
        this.popup.classList.remove("hidden");
    }

    closePopup() {
        this.popup.classList.add("hidden");
    }
}


export {ProjectsHandler, ToDosHandler}