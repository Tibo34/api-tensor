import { Language } from 'src/Models/Language';
import { LanguagesController } from './controllers/languages.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LanguageModule } from './modules/LanguageModule';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 9906,
      username: 'sign_user',
      password: 'user_sign28',
      database: 'LanguageSign',
      entities: [Language],
      synchronize: true,
    }),
    LanguageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
