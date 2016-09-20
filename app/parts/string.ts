import {Component, Input} from '@angular/core';
import {Observable}       from "rxjs/Rx";

@Component({
    selector: 'string-editor',
    templateUrl: 'app/parts/string.html'
})
export class StringEditor {

    @Input()  public propertyName: string;
    @Input()  public entity: any;
};