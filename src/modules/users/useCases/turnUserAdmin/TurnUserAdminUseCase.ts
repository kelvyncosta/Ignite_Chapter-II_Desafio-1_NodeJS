import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const existsUser = this.usersRepository.findById(user_id);

    if (!existsUser) {
      throw new Error("User not found");
    }

    const user = this.usersRepository.turnAdmin(existsUser);

    return user;
  }
}

export { TurnUserAdminUseCase };
