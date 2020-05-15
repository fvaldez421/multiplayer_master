import { v4 as uuidV4 } from 'uuid'

import { User } from "../models";
import { UserService } from "../services";
import BaseController from "./BaseController";


const userService = new UserService(User);

class AuthController extends BaseController {
  constructor(service) {
    super(service);
    this.login = this.login.bind(this)
  }
  /**
   * Perform a signup attempy
   * @param {*} req 
   * @param {*} res 
   */
  signup(req, res) {
    const { body: { username, password, confirm } = {} } = req
    console.log(req.body)
    if (username && password) {
      if (confirm !== password) return res.json({ error: 'Confirm field does not match password' }).status(400)
      // check username is unique
      // create user with auth service
      // attempt to create user
      const token = JSON.stringify(Date.now())
      return res.json({ username, token, message: 'Signup successful' }).status(200)
    }
    // return temp uuid for managing game sessions
    if (username && !password) {
      const tempUuid = uuidV4()
      const token = JSON.stringify(Date.now())
      return res.json({ username, token, uuid: tempUuid, message: 'Simple signup successful' }).status(200)
    }
    return res.json({ error: 'Username is invalid' }).status(400)
  }
  /**
   * Perform a login attempt
   * @param {Object} req 
   */
  login(req, res) {
    const { body: { username, tempUuid, password } } = req
    if (username && tempUuid && !password) {
      return res.json({ username, uuid: tempUuid })
    }
    if (username && password) {
      // attempt full login
      const token = JSON.stringify(Date.now())
      return res.json({ username, token })
    }
  }
}

export default new AuthController(userService);