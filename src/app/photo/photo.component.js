var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Rx';
export let Photo = class Photo {
    constructor(_appService) {
        this._appService = _appService;
    }
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
        });
    }
};
Photo = __decorate([
    Component({
        selector: 'photo',
        templateUrl: 'app/photo/photo.component.html',
        styleUrls: ['app/photo/photo.component.css']
    }), 
    __metadata('design:paramtypes', [AppService])
], Photo);
//# sourceMappingURL=photo.component.js.map