import { Response, Request, NextFunction } from "express";
import { IAuthInteractor } from "../interfaces/IAuthInteractor";

export class AuthController {
  private interactor: IAuthInteractor;

  constructor(interactor: IAuthInteractor) {
    this.interactor = interactor;
  }

  async onLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const result = await this.interactor.login({ email, password });
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }

  async onRegister(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      const result = await this.interactor.register({ name, email, password });
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  }
}
