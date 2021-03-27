import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const users = this.listAllUsersUseCase.execute({
        user_id: <string>user_id,
      });
      return response.status(200).json(users);
    } catch (error) {
      if (error.message === "nao tem user")
        return response.status(400).json({ error: error.message });
      return response.status(400).json({ error: error.message });
    }
  }
}

export { ListAllUsersController };
