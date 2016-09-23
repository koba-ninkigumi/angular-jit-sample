import { Component, ElementRef } from '@angular/core';

declare var componentHandler;

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    element: ElementRef;
    public currentTabs = "date";
    public tabs = [];

    constructor(el: ElementRef) {
        this.element = el;

        //this.setTabs('date');
        this.tabs = [{ name: "a" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }, { name: "b" }];
    }

}
