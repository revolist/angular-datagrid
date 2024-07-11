import { ColumnDataSchemaModel, EditorCtr, SaveData } from '@revolist/revogrid';
import { Injector, Type, inject } from '@angular/core';
import { EditorAdapter } from './editor.adapter';
/**
 * Create editor constructor.
 * This function creates editor constructor by wrapping it with EditorAdapter
 * which is responsible for connecting editor with grid.
 */
export const Editor = (
  EditorComponent: Type<any>,
  injector = inject(Injector),
): EditorCtr => {
  /**
   * Editor constructor wrapper
   * @param column column data to which editor is bound
   * @param save function to save data
   * @param close function to close editor
   * @returns editor instance
   */
  return function (
    column: ColumnDataSchemaModel,
    save: (value: SaveData, preventFocus?: boolean) => void,
    close: (focusNext?: boolean) => void,
  ) {
    return new EditorAdapter(EditorComponent, injector, column, save, close);
  };
};
