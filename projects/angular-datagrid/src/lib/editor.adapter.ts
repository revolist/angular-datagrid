import { EditCell, ColumnDataSchemaModel, HyperFunc, VNode, SaveData, EditorBase } from '@revolist/revogrid';
import { Injector, Type } from '@angular/core';
import { TemplateConstructor, RenderedComponent, AngularElement } from './renderer';
/**
 * Data passed to editor
 */
export type EditorType = {
  column: ColumnDataSchemaModel;
  save: (value: SaveData, preventFocus?: boolean) => void;
  close: (focusNext?: boolean) => void;
} & Partial<EditCell>;

export class EditorAdapter implements EditorBase  {
  public element: AngularElement | null = null;
  public editCell?: EditCell;
  private renderedComponent: RenderedComponent<any> | null = null;

  constructor(
    private EditorComponent: Type<any>,
    private injector: Injector,
    public column: ColumnDataSchemaModel,
    private save: (value: SaveData, preventFocus?: boolean) => void,
    private close: (focusNext?: boolean) => void,
  ) {}

  // optional, called after editor rendered
  componentDidRender() {}

  // optional, called after editor destroyed
  disconnectedCallback() {
    this.renderedComponent?.destroy();
    this.renderedComponent = null;
  }

  render(h: HyperFunc<VNode>) {
    return h('span', {
      key: `${this.column.prop}-${this.editCell?.rowIndex || 0}`,
      ref: (el: AngularElement) => 
        this.renderedComponent = TemplateConstructor(
          el,
          this.EditorComponent,
          {
            ...this.editCell,
            column: this.column,
            save: this.save,
            close: this.close,
          },
          this.injector,
        ),
      });
  }
}
