import { Language } from 'src/Models/Language';
import { LanguagesService } from './../services/LanguagesServices';
import { LanguagesController } from './../controllers/languages.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports:[TypeOrmModule.forFeature([Language])],
    controllers: [LanguagesController],
    providers: [LanguagesService],
    exports:[LanguagesService]
})
export class LanguageModule { }