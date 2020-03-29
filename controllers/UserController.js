import { User } from "../models";
import { UserService } from "../services";
import BaseController from "./BaseController";


const userService = new UserService(User);

class UserController extends BaseController {
  constructor(service) {
    super(service);
  }
}

export default new UserController(userService);