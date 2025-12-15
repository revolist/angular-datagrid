import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
  imports: [RevoGrid, RouterOutlet],
  template: `
    <div style="display: flex; flex-direction: column; gap: 20px; padding: 20px;">
      <h2>Direct RevoGrid Component</h2>
      <revo-grid
        key="app-root"
        style="height: 200px; width: 200px"
        [filter]="true"
        [columns]="columns"
        [source]="source()"
        [editors]="editors"
         theme="material"
      ></revo-grid>
      
      <h2>RevoGrid Component via Router Outlet</h2>
      <router-outlet></router-outlet>
    </div>
  `,
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
        filter: true,
        columnTemplate: Template(CellComponent),
        cellTemplate: Template(CellComponent),
      },
      {
        prop: 'details',
        name: 'Second',
        filter: true,
      },
    ];
    this.editors = { [MY_EDITOR]: Editor(EditorComponent) };
  }
}
