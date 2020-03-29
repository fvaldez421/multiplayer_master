import { Lobby } from "../models";
import { LobbyService } from "../services";
import BaseController from "./BaseController";


const lobbyService = new LobbyService(Lobby);

class LobbyController extends BaseController {
  constructor(service) {
    super(service);
  }
}


export default new LobbyController(lobbyService);