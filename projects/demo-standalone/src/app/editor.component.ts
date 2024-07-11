import { Component, Input } from '@angular/core';
import { type EditorType } from 'angular-datagrid';

@Component({
  selector: 'app-editor',
  standalone: true,
  template: '<button (click)="testClick()">{{ props.val }} close!</button>',
})
export class EditorComponent {
  @Input() props!: EditorType;

  
  testClick() {
    this.props.close();
  }
}
