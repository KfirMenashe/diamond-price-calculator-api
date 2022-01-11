import { Injectable } from '@nestjs/common';

@Injectable()
export class SleepService {
    async sleepSeconds(seconds: number): Promise<unknown> {
        return new Promise(resolve => setTimeout(resolve, seconds * 1000));
    }
}
