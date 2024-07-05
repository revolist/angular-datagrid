import { Component, Injector } from '@angular/core';
import { ColumnRegular, Editor, Editors, RevoGrid, Template } from 'angular-datagrid';
import { CellComponent } from './cell.component';
import { EditorComponent } from './editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RevoGrid, EditorComponent, CellComponent],
  template: `<revo-grid style="height: 200px; width: 200px" [columns]="columns" [source]="source" [editors]="editors"></revo-grid>`
})
export class AppComponent {
  source: any[] = [  {
    name: '1',
    details: 'Item 1',
  }];
  columns: ColumnRegular[] = [];
  editors: Editors = {};

  constructor(private ref: Injector) {
    this.source = [
      {
        name: '1',
        details: 'Item 1',
      },
      {
        name: '2',
        details: 'Item 2',
      },
    ];
    const MY_EDITOR = 'custom-editor';
    this.columns = [
      {
        prop: 'name',
        name: 'First',
        editor: MY_EDITOR,
        cellTemplate: Template(CellComponent, ref),
      },
      {
        prop: 'details',
        name: 'Second',
      },
    ];
    this.editors = { [MY_EDITOR]: Editor(EditorComponent, ref) };
  }
}
