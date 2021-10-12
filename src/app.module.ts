import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contato } from './models/contato.model';
import { ContatoController } from './controllers/contato/contato.controller';
import { EnderecoController } from './controllers/endereco/endereco.controller';
import { Endereco } from './models/endereco.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_CONNECTION as any,
      host: process.env.TYPEORM_HOST,
      port: parseInt(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Contato,Endereco]
    }),
    TypeOrmModule.forFeature([Contato,Endereco])
  ],
  controllers: [AppController, ContatoController, EnderecoController],
  providers: [AppService],
})
export class AppModule {}
