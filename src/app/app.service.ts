import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class AppService {

    constructor(private http: Http) { }

    getJsonData(url: string) {
        return this.http.get(url).map((res: Response) => res.json());
    }

}
