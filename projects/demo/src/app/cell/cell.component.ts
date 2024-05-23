import { Component, Input } from '@angular/core';
import { ColumnDataSchemaModel } from '@revolist/revogrid';


@Component({
  selector: 'app-cell',
  template: '<span> {{value}} works!</span>',
})
export class CellComponent {
  @Input() props!: ColumnDataSchemaModel;

  get value() {
    return this.props.rowIndex;
  }
}
