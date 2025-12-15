import { Component, signal } from '@angular/core';
import {
  type ColumnRegular,
  Editor,
  type Editors,
  RevoGrid,
  Template,
} from 'angular-datagrid';
import { CellComponent } from './cell.component';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'app-grid-route',
  standalone: true,
  imports: [RevoGrid],
  template: `<div>
      <revo-grid
        key="grid-route"
        style="height: 200px; width: 200px"
        [filter]="true"
        [columns]="columns"
        [source]="source()"
        [editors]="editors"
      ></revo-grid>
  </div>`,
})
export class GridRouteComponent {
  private static readonly MY_EDITOR = 'custom-editor';
  
  source = signal([
    {
      name: 'Route 1',
      details: 'Route Item 1',
    },
    {
      name: 'Route 2',
      details: 'Route Item 2',
    },
    {
      name: 'Route 3',
      details: 'Route Item 3',
    },
  ]);
  
  // Set columns as class field initializer so they're available BEFORE the element initializes
  // The grid's componentWillLoad runs when the element connects, which happens before constructor
  columns: ColumnRegular[] = [
    {
      prop: 'name',
      name: 'Route First',
      filter: true,
      editor: GridRouteComponent.MY_EDITOR,
      columnTemplate: Template(CellComponent),
      cellTemplate: Template(CellComponent),
    },
    {
      prop: 'details',
      name: 'Route Second',
    },
  ];
  
  // Set editors as class field initializer
  editors: Editors = {
    [GridRouteComponent.MY_EDITOR]: Editor(EditorComponent),
  };
}
