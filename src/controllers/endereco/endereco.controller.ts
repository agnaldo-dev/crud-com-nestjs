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
import { Endereco } from 'src/models/endereco.model';
import { Repository } from 'typeorm';

@Controller('endereco')
export class EnderecoController {

    constructor(
        @InjectRepository(Endereco)
        private EnderecoRepo: Repository<Endereco>,
    ) {}
    
    @Get()
    index() {
        return this.EnderecoRepo.find();
    }
    
    @Get(':id')
    show(@Param('id') id: string) {
        return this.EnderecoRepo.findOneOrFail(id);
    }
    
    @Post()
    store(@Body() body) {
        const Endereco = this.EnderecoRepo.create(body);
        return this.EnderecoRepo.save(Endereco);
    }
    
    @Put(':id')
    async update(@Param('id') id: string, @Body() body) {
        await this.EnderecoRepo.findOneOrFail(id);
        this.EnderecoRepo.update({ id: +id }, body);
        return await this.EnderecoRepo.findOne(id);
    }
    
    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        await this.EnderecoRepo.findOneOrFail(id);
        this.EnderecoRepo.delete(id);
    }
}
