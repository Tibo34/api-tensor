import { Language } from './../Models/Language';
import { LanguagesService } from './../services/LanguagesServices';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly langagueService: LanguagesService) {}

  @Get()
  async getAll(): Promise<Language[]> {
    return this.langagueService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id:number):Promise<Language>{
    return await this.langagueService.findById(id);
  }
}
