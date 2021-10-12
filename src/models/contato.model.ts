import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Contato {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;
    
    @Column()
    email: string;

    @Column()
    assunto: string;

    @Column()
    mensagem: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
