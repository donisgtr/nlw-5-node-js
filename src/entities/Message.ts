import { Entity, PrimaryColumn, CreateDateColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("messages")
class Message {

    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @Column()
    text: string;

    @JoinColumn( {name: "user_id"})
    @ManyToOne( () => User) //muitas mensagens para um. 
    user: User; //criando o relacionamento.

    @Column()
    user_id: string;

    @CreateDateColumn()
    created_at: string;
    
    constructor() {
        if(!this.id){
            this.id = uuid();
        } //pegar os atruibutos da classe.  
    }
}

export {Message};