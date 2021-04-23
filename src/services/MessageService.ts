import { getCustomRepository } from "typeorm";
import { MessagesRepository } from "../repositories/MenssageRepository";

interface IMessageCreate {
  admin_id?: string; //? quer dizer que é opcional.
  text: string;
  user_id: string;
}

class MessagesService {
  async create({ admin_id, text, user_id }: IMessageCreate) {
    const messageRepository = getCustomRepository(MessagesRepository);

    const message = messageRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messageRepository.save(message);

    return message;
  }

  async listByUser(user_id: string) {
    const messagesRepository = getCustomRepository(MessagesRepository);

    const list = await messagesRepository.find({
      where: {user_id},
      relations: ["user"],
    });
    return list;
  }
}

export { MessagesService };
