import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class Endereco {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    logradouro: string;

    @Column()
    telefone: string;
    
    @Column()
    email: string;

    @Column()
    cidade: string;

    @Column()
    bairro: string;
    
    @Column()
    uf: string;
    
    @Column()
    numero: number;
    
    @Column()
    complemento: string;

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;
}
