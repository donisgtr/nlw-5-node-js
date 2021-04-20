//começa a definir as notetions

import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from "typeorm";

import { v4 as uuid } from "uuid";

@Entity("settings") // meu settings vi ser uma entidade e qual nome da table que criamos.
class Setting {
  @PrimaryColumn()
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  //e um metodo que e chamado toda vez que damos new nomedaclasse e chamado o construtor dessa classe. 

  constructor() {
      if(!this.id){
          this.id = uuid();
      } //pegar os atruibutos da classe.  
  }
}

export { Setting };
