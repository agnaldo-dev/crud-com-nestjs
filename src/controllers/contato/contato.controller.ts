import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contato } from 'src/models/contato.model';
import { Repository } from 'typeorm';

@Controller('contatos')
export class ContatoController {
    
    constructor(
        @InjectRepository(Contato)
        private ContatoRepo: Repository<Contato>,
    ) {}
    
    @Get()
    index() {
        return this.ContatoRepo.find();
    }
    
    @Get(':id')
    show(@Param('id') id: string) {
        return this.ContatoRepo.findOneOrFail(id);
    }
    
    @Post()
    store(@Body() body) {
        const Contato = this.ContatoRepo.create(body);
        return this.ContatoRepo.save(Contato);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() body) {
        await this.ContatoRepo.findOneOrFail(id);
        this.ContatoRepo.update({ id: +id }, body);
        return await this.ContatoRepo.findOne(id);
    }
    
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        await this.ContatoRepo.findOneOrFail(id);
        this.ContatoRepo.delete(id);
    }
}
