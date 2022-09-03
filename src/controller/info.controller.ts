import { Controller, HttpStatus, Res, Post, Get } from '@nestjs/common';
import { Response } from 'express';
import { InfoService } from '../service/info.service';

@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}
  @Post()
  async injectInfo(@Res() res: Response) {
    this.infoService.insertInfo();
    return res.status(HttpStatus.CREATED).send({ message: 'Success' });
  }
  @Get()
  async getInfo(@Res() res: Response) {
    console.log();
    const info = await this.infoService.getInfo();
    return res.status(HttpStatus.OK).send({ info });
  }
}
