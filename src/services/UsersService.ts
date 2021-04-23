import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
    async create(email: string) {
        const usersRepository = getCustomRepository(UsersRepository);

         // verificar se o usuario exite.
        const userExists = await usersRepository.findOne({ 
            email        
        })
        
         // se não existir salvar no banco de dados.
        if(userExists) {
            return userExists;
        }   

        const user = usersRepository.create({ email, });

        await usersRepository.save(user);

        // se existir so retornar o user.
        return user;
    }

}

export { UserService };