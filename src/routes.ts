import { Router } from "express";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagensController = new MessagesController();


routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);


routes.post("/messages", messagensController.create);
routes.get("/messages/:id", messagensController.showByUser);

export { routes }; 