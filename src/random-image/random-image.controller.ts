import { HttpService } from '@nestjs/axios';
import { Controller, Get, Param } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Controller('random-image')
export class RandomImageController {
    constructor(private readonly httpService: HttpService) { }

    @Get()
    async getReference() {
        const response = await lastValueFrom(
            this.httpService.get(`https://picsum.photos/1500?random=${Date.now()}`),
        );
        const url = response.request.res.responseUrl;

        const id = url.split("id/")[1].split("/")[0];
        const author = await lastValueFrom(
            this.httpService.get(`https://picsum.photos/id/${id}/info`),
        );

        return { url: url, author: author.data.author };
    };
};
