import { Component, Input } from '@angular/core';
import { type EditorType } from '@revolist/angular-datagrid';

@Component({
  selector: 'app-editor',
  template: '<button (click)="testClick()">{{ props.val }} close!</button>',
})
export class EditorComponent {
  @Input() props!: EditorType;

  
  testClick() {
    this.props.close();
  }
}
