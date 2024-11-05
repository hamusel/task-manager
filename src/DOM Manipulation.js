import {Project, ToDo} from "./TODO Objects";

class ProjectsHandler {
    constructor() {
        this.projectsList = document.getElementById('projects-list');
        this.projectIndex = 0;
        this.selectedProject = 0;
        this.addProjectButton = document.getElementById('addProject');
        this.addProjectButton.addEventListener('click', () => this.addProject());
        this.toDosHandler = new ToDosHandler(this.selectedProject);
        this.addProject();
    }

    addProject() {
        this.projectIndex++;
        this.selectedProject = this.projectIndex;

        const projectItem = document.createElement('li');
        projectItem.classList.add('project');
        projectItem.innerText = "Project " + this.projectIndex;
        const project = new Project("Project " + this.projectIndex, "01.01.01", [], this.projectIndex);
        this.projectsList.appendChild(projectItem);


        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonContainer");
        projectItem.appendChild(buttonDiv);
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        buttonDiv.appendChild(removeButton);
        removeButton.textContent = "remove";

        projectItem.addEventListener('click', () => {
            this.selectedProject = project.getIndex();
            this.toDosHandler.displayToDos();
        });

        removeButton.addEventListener("click", () => this.removeProject(projectItem))
    }

    removeProject(project) {
        this.projectIndex--;
        this.projectsList.removeChild(project);
    }
}

class ToDosHandler {
    constructor(selectedProject) {
        this.selectedProject = selectedProject;
        this.toDos = [];
        this.toDosList = document.getElementById('toDos-list');
        this.popup = document.getElementById('popup');
        this.openPopupButton = document.getElementById('openPopup');
        this.addButton = document.getElementById('addButton');
        this.closeButton = document.getElementById('closeButton');

        this.openPopupButton.addEventListener("click", () => this.openPopup());
        this.closeButton.addEventListener("click", () => this.closePopup());
        this.addButton.addEventListener("click", () => this.addToDo())
    }

    addToDo() {
        const title = document.getElementById('title').value;
        const dueDate = document.getElementById('dueDate').value;
        const description = document.getElementById('description').value;
        const priority = document.getElementById('priority').value;


        const toDoItem = document.createElement('li');
        toDoItem.classList.add('toDo');
        const toDo = new ToDo(title, description, dueDate, priority, this.selectedProject)
        this.toDos.push(toDo);
        toDoItem.innerText = toDo.info();
        this.toDosList.appendChild(toDoItem);

        const buttonDiv = document.createElement("div");
        buttonDiv.classList.add("buttonContainer");
        toDoItem.appendChild(buttonDiv);
        const removeButton = document.createElement("button");
        removeButton.classList.add("removeButton");
        buttonDiv.appendChild(removeButton);
        removeButton.textContent = "remove";

        removeButton.addEventListener("click", () => this.removeToDo(toDoItem))
    }

    displayToDos() {
        this.toDos.forEach(
        )
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