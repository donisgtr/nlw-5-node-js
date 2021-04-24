import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

// porque estou criando isso? separara a responsabilidade do controller

class SettingsService {
  private settingsRepository: Repository<Setting>;

  constructor() {
      this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: ISettingsCreate) {

    //findOne = seria algo do tipo Seletec * from where username = "username" limit 1;
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    });

    if (userAlreadyExists) {
      throw new Error("User Already exists!");
    }

    const settings = this.settingsRepository.create({
      chat,
      username,
    });
    await this.settingsRepository.save(settings);

    return settings;
  }
}

export { SettingsService };
