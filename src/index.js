import "./styles.css";
import {ProjectsHandler, ToDosHandler} from "./DOM Manipulation";
import {ToDo, Project} from "./TODO Objects";

const addTask = document.getElementById("add");
const body = document.querySelector("body");
const toDo = new ToDosHandler();
