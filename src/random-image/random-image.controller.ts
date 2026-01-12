import { Controller, Get, Query } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { GetRandomImageDto } from './dto/get-random-image.dto';
import { RandomImageResponse } from './interfaces/pixabay-response.interface';
import dotenv from "dotenv";
dotenv.config();

@Controller('random-image')
export class RandomImageController {
    constructor(private readonly httpService: HttpService) { }

    @Get()
    async getRandomImage(
        @Query() query: GetRandomImageDto,
    ): Promise<{ reference: RandomImageResponse }> {
        const { category, page, index } = query;
        const apiKey = process.env.PIXABAY_KEY;
        console.log(apiKey)

        const url = `https://pixabay.com/api/?key=${apiKey}&category=${category}&image_type=photo&per_page=3&page=${page}`;

        const response = await lastValueFrom(
            this.httpService.get(url),
        );

        const image = response.data.hits[index];
        console.log("ola", image)
        const result: RandomImageResponse = {
            author: image.user,
            url: image.largeImageURL,
            likes: image.likes,
            userPage: image.userURL,
            views: image.views,
        };

        return { reference: result };
    }
}
