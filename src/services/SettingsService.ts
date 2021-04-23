import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";


interface ISettingsCreate {
    chat: boolean;
    username: string;
}

// porque estou criando isso? separara a responsabilidade do controller

class SettingsService {
        async create({chat, username} : ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);

        //findOne = seria algo do tipo Seletec * from where username = "username" limit 1;
        const userAlreadyExists = await settingsRepository.findOne({
            username
        });

        if(userAlreadyExists) {
            throw new Error("User Already exists!");
        }
    
        const settings = settingsRepository.create({
            chat, 
            username
        })
        await settingsRepository.save(settings);

        return settings
    }
}

export { SettingsService } 