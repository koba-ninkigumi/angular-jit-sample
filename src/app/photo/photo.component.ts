import { Component } from '@angular/core';

import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'photo',
    templateUrl: 'app/photo/photo.component.html',
    styleUrls: ['app/photo/photo.component.css']
})
export class Photo {

    public photos;

    constructor(private _appService: AppService) { }

    ngOnInit() {
        this.getPhotos();
    }

    getPhotos() {
        this._appService.getJsonData('./app/photo.json').subscribe(
            // the first argument is a function which runs on success
            data => { this.photos = data; },
            // the second argument is a function which runs on error
            err => console.error(err),
            // the third argument is a function which runs on completion
            () => {
                console.log('done loading photo');

                Observable.interval(1000)
                    .publish()
                    .refCount()
                    .subscribe(() => {
                        console.log("1up");
                    });

            }
        );
    }

}
