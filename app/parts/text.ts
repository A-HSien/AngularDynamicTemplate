import {Component, Input} from '@angular/core';
import {Observable}       from "rxjs/Rx";

@Component({
    selector: 'text-editor',
    templateUrl: 'app/parts/text.html'
})
export class TextEditor {

    @Input()  public propertyName: string;
    @Input()  public entity: any;
};