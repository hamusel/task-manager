import {Project, ToDo} from "./TODO Objects";


class TaskManager {
    constructor() {
        new ProjectsHandler();
    }
}

class ProjectsHandler {
    constructor() {
        this.projectsList = document.getElementById('projects-list');
        this.NamingProjectIndex = this.findMyIndex();
        this.addProjectButton = document.getElementById('addProject');
        this.addProjectButton.addEventListener('click', () => this.addProject());
        this.toDosHandlers = [];
        this.addProject();
    }

    findMyIndex() {
        //TODO: write method to decide the ID of a certain project
    }

    addProject() {
        const projectID = this.NamingProjectIndex;
        const toDosHandler = new ToDosHandler();
        this.toDosHandlers[projectID] = toDosHandler;

        const projectItem = document.createElement('li');
        projectItem.classList.add('project');
        projectItem.innerText = "Project " + projectID;
        projectItem.dataset.projectId = projectID;
        this.projectsList.appendChild(projectItem);

        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonContainer");
        projectItem.appendChild(buttonDiv);
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        buttonDiv.appendChild(removeButton);
        removeButton.textContent = "remove";

        projectItem.addEventListener('click', () => {
            toDosHandler.displayToDos();
        });

        removeButton.addEventListener("click", () => this.removeProject(projectItem, projectID));

        this.NamingProjectIndex++;
    }

    removeProject(projectItem, projectID) {
        this.projectsList.removeChild(projectItem);

        if (this.toDosHandlers[projectID]) {
            this.toDosHandlers[projectID].removeToDos();
            delete this.toDosHandlers[projectID];
        }
    }
}

class ToDosHandler {
    constructor() {
        this.toDos = [];
        this.toDosList = document.getElementById('toDos-list');
        this.popup = document.getElementById('popup');
        this.openPopupButton = document.getElementById('openPopup');
        this.addButton = document.getElementById('addButton');
        this.closeButton = document.getElementById('closeButton');

        this.openPopupButton.addEventListener("click", () => this.openPopup());
        this.closeButton.addEventListener("click", () => this.closePopup());
        this.addButton.addEventListener("click", () => this.addToDo());
    }

    addToDo() {
        const title = document.getElementById('title').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;

        const toDo = new ToDo(title, description, dueDate, priority);
        this.toDos.push(toDo);
        this.displayToDos();
    }

    displayToDos() {
        while (this.toDosList.firstChild) {
            this.toDosList.removeChild(this.toDosList.firstChild);
        }

        this.toDos.forEach((toDo, index) => {
            const toDoItem = document.createElement('li');
            toDoItem.classList.add('toDo');
            toDoItem.innerText = toDo.info();
            this.toDosList.appendChild(toDoItem);

            const buttonDiv = document.createElement("div");
            buttonDiv.classList.add("buttonContainer");
            toDoItem.appendChild(buttonDiv);

            const removeButton = document.createElement("button");
            removeButton.classList.add("removeButton");
            buttonDiv.appendChild(removeButton);
            removeButton.textContent = "remove";

            removeButton.addEventListener("click", () => this.removeToDo(toDoItem, index));
        });
    }

    removeToDos() {
        this.toDos = [];
        this.displayToDos();
    }

    removeToDo(toDoItem, index) {
        this.toDos.splice(index, 1);
        this.displayToDos();
    }

    openPopup() {
        this.popup.classList.remove("hidden");
    }

    closePopup() {
        this.popup.classList.add("hidden");
    }
}


export {ProjectsHandler, ToDosHandler}