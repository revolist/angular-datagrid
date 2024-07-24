import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { type EditorType } from 'angular-datagrid';

@Component({
  selector: 'app-editor',
  standalone: true,
  template: '<button #myDiv (click)="testClick()">{{ props.val }} close!</button>',
})
export class EditorComponent {
  @ViewChild('myDiv') myDivElement!: ElementRef;
  @Input() props!: EditorType;

  ngAfterViewInit() {
    console.log('componentDidRender', this.props);
    console.log(this.myDivElement.nativeElement); // Access the native element
  }
  
  testClick() {
    this.props.close();
  }
}
