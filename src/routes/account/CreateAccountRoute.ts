import { Request, Response } from "express";

export class CreateAccountRoute {

  async handle(req: Request, res: Response) {
    return res.status(201).json({ created: true });
  }
}