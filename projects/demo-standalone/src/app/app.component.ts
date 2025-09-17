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
  selector: 'app-root',
  standalone: true,
  imports: [RevoGrid],
  template: `<revo-grid
    style="height: 200px; width: 200px"
    [filter]="true"
    [columns]="columns"
    [source]="source()"
    [editors]="editors"
  ></revo-grid>`,
})
export class AppComponent {
  source = signal([
    {
      name: 'Initial',
      details: 'Initial Details',
    },
  ]);
  columns: ColumnRegular[] = [];
  editors: Editors = {};

  constructor() {
    this.source.set([
      {
        name: '1',
        details: 'Item 1',
      },
      {
        name: '2',
        details: 'Item 2',
      },
    ]);
    const MY_EDITOR = 'custom-editor';
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        editor: MY_EDITOR,
        columnTemplate: Template(CellComponent),
        cellTemplate: Template(CellComponent),
      },
      {
        prop: 'details',
        name: 'Second',
      },
    ];
    this.editors = { [MY_EDITOR]: Editor(EditorComponent) };
  }
}
