import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Language } from 'src/Models/Language';
import { Repository } from 'typeorm';


@Injectable()
export class LanguagesService {
  private readonly languages: Language[] = [];

  constructor(@InjectRepository(Language) private languageRepository:Repository<Language>){}

  create(language: Language) {
    this.languages.push(language);
  }

  findAll(): Promise<Language[]> {
    return this.languageRepository.find();
  }

  findById(id:number):Promise<Language>{
      return this.languageRepository.findOne(id);
  }
}