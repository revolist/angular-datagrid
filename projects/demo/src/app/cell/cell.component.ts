import { Component, Input } from '@angular/core';
import { ColumnDataSchemaModel } from 'angular-datagrid';


@Component({
  selector: 'app-cell',
  standalone: true,
  template: '<span> {{value}}</span>',
})
export class CellComponent {
  @Input() props!: ColumnDataSchemaModel;

  get value() {
    return this.props.value;
  }
}
