/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import type { Components } from '@revolist/revogrid/standalone';

import { defineCustomElement as defineRevoGrid } from '@revolist/revogrid/standalone/revo-grid.js';
@ProxyCmp({
  defineCustomElementFn: defineRevoGrid,
  inputs: ['accessible', 'additionalData', 'applyOnClose', 'autoSizeColumn', 'canFocus', 'canMoveColumns', 'colSize', 'columnTypes', 'columns', 'disableVirtualX', 'disableVirtualY', 'editors', 'exporting', 'filter', 'focusTemplate', 'frameSize', 'grouping', 'hideAttribution', 'jobsBeforeRender', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'registerVNode', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'stretch', 'theme', 'trimmedRows', 'useClipboard'],
  methods: ['refresh', 'setDataAt', 'scrollToRow', 'scrollToColumnIndex', 'scrollToColumnProp', 'updateColumns', 'addTrimmed', 'scrollToCoordinate', 'setCellEdit', 'setCellsFocus', 'getSource', 'getVisibleSource', 'getSourceStore', 'getColumnStore', 'updateColumnSorting', 'clearSorting', 'getColumns', 'clearFocus', 'getPlugins', 'getFocused', 'getContentSize', 'getSelectedRange']
})
@Component({
  selector: 'revo-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accessible', 'additionalData', 'applyOnClose', 'autoSizeColumn', 'canFocus', 'canMoveColumns', 'colSize', 'columnTypes', 'columns', 'disableVirtualX', 'disableVirtualY', 'editors', 'exporting', 'filter', 'focusTemplate', 'frameSize', 'grouping', 'hideAttribution', 'jobsBeforeRender', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'registerVNode', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'stretch', 'theme', 'trimmedRows', 'useClipboard'],
  standalone: true
})
export class RevoGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['contentsizechanged', 'beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforerange', 'afterfocus', 'roworderchanged', 'beforesortingapply', 'beforesorting', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'beforeanysource', 'aftersourceset', 'afteranysource', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart', 'aftercolumnresize', 'beforerowdefinition', 'filterconfigchanged', 'rowheaderschanged', 'beforegridrender', 'aftergridinit', 'additionaldatachanged', 'afterthemechanged']);
  }
}


import type { MultiDimensionType as IRevoGridMultiDimensionType } from '@revolist/revogrid/standalone';
import type { BeforeSaveDataDetails as IRevoGridBeforeSaveDataDetails } from '@revolist/revogrid/standalone';
import type { BeforeRangeSaveDataDetails as IRevoGridBeforeRangeSaveDataDetails } from '@revolist/revogrid/standalone';
import type { AfterEditEvent as IRevoGridAfterEditEvent } from '@revolist/revogrid/standalone';
import type { ChangedRange as IRevoGridChangedRange } from '@revolist/revogrid/standalone';
import type { FocusAfterRenderEvent as IRevoGridFocusAfterRenderEvent } from '@revolist/revogrid/standalone';
import type { ColumnRegular as IRevoGridColumnRegular } from '@revolist/revogrid/standalone';
import type { PositionItem as IRevoGridPositionItem } from '@revolist/revogrid/standalone';
import type { FocusedData as IRevoGridFocusedData } from '@revolist/revogrid/standalone';
import type { DimensionRows as IRevoGridDimensionRows } from '@revolist/revogrid/standalone';
import type { DataType as IRevoGridDataType } from '@revolist/revogrid/standalone';
import type { ColumnCollection as IRevoGridColumnCollection } from '@revolist/revogrid/standalone';
import type { ColumnProp as IRevoGridColumnProp } from '@revolist/revogrid/standalone';
import type { FilterCollection as IRevoGridFilterCollection } from '@revolist/revogrid/standalone';
import type { ViewPortScrollEvent as IRevoGridViewPortScrollEvent } from '@revolist/revogrid/standalone';
import type { DataInput as IRevoGridDataInput } from '@revolist/revogrid/standalone';
import type { Theme as IRevoGridTheme } from '@revolist/revogrid/standalone';

export declare interface RevoGrid extends Components.RevoGrid {
  /**
   * New content size has been applied. The size excludes the header.
Currently, the event responsible for applying the new content size does not provide the actual size.
To retrieve the actual content size, you can utilize the `getContentSize` function after the event has been triggered.
   */
  contentsizechanged: EventEmitter<CustomEvent<IRevoGridMultiDimensionType>>;
  /**
   * This event is triggered before the data is edited.
To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`.
To override the edit result with your own value, set the `e.val` property to your desired value.
   */
  beforeedit: EventEmitter<CustomEvent<IRevoGridBeforeSaveDataDetails>>;
  /**
   * This event is triggered before applying range data, specifically when a range selection occurs.
To customize the data and prevent the default edit data from being set, you can call `e.preventDefault()`.
   */
  beforerangeedit: EventEmitter<CustomEvent<IRevoGridBeforeRangeSaveDataDetails>>;
  /**
   * Triggered after data applied or range changed.
   */
  afteredit: EventEmitter<CustomEvent<IRevoGridAfterEditEvent>>;
  /**
   * This event is triggered before autofill is applied.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`.
   */
  beforeautofill: EventEmitter<CustomEvent<IRevoGridChangedRange>>;
  /**
   * Triggered before range applied.
Use e.preventDefault() to prevent range.
   */
  beforerange: EventEmitter<CustomEvent<IRevoGridChangedRange>>;
  /**
   * Triggered after focus render finished.
Can be used to access a focus element through `event.target`.
This is just a duplicate of `afterfocus` from `revogr-focus.tsx`.
   */
  afterfocus: EventEmitter<CustomEvent<IRevoGridFocusAfterRenderEvent>>;
  /**
   * This event is triggered before the order of `rgRow` is applied.
To prevent the default behavior of changing the order of `rgRow`, you can call `e.preventDefault()`.
   */
  roworderchanged: EventEmitter<CustomEvent<{ from: number; to: number }>>;
  /**
   * Triggered by sorting.plugin.ts
Before sorting apply.
Use e.preventDefault() to prevent sorting data change.
   */
  beforesortingapply: EventEmitter<CustomEvent<{ column: IRevoGridColumnRegular; order: 'desc' | 'asc'; additive: boolean; }>>;
  /**
   * Triggered by sorting.plugin.ts
Before sorting event.
Initial sorting triggered, if this event stops no other event called.
Use e.preventDefault() to prevent sorting.
   */
  beforesorting: EventEmitter<CustomEvent<{ column: IRevoGridColumnRegular; order: 'desc' | 'asc'; additive: boolean; }>>;
  /**
   * This event is triggered when the row order change is started.
To prevent the default behavior of changing the row order, you can call `e.preventDefault()`.
To change the item name at the start of the row order change, you can set `e.text` to the desired new name.
   */
  rowdragstart: EventEmitter<CustomEvent<{ pos: IRevoGridPositionItem; text: string; }>>;
  /**
   * On header click.
   */
  headerclick: EventEmitter<CustomEvent<IRevoGridColumnRegular>>;
  /**
   * This event is triggered before the cell focus is changed.
To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`.
   */
  beforecellfocus: EventEmitter<CustomEvent<IRevoGridBeforeSaveDataDetails>>;
  /**
   * This event is triggered before the grid focus is lost.
To prevent the default behavior of changing the cell focus, you can call `e.preventDefault()`.
   */
  beforefocuslost: EventEmitter<CustomEvent<IRevoGridFocusedData | null>>;
  /**
   * Before main source/rows data apply.
You can override data source here
   */
  beforesourceset: EventEmitter<CustomEvent<{ type: IRevoGridDimensionRows; source: IRevoGridDataType[]; }>>;
  /**
   * Before data apply on any source type. Can be source from pinned and main viewport.
You can override data source here
   */
  beforeanysource: EventEmitter<CustomEvent<{ type: IRevoGridDimensionRows; source: IRevoGridDataType[]; }>>;
  /**
   * After main source/rows updated
   */
  aftersourceset: EventEmitter<CustomEvent<{ type: IRevoGridDimensionRows; source: IRevoGridDataType[]; }>>;
  /**
   * Emitted after each source update, whether from the pinned or main viewport.
Useful for tracking all changes originating from sources in both the pinned and main viewports.
   */
  afteranysource: EventEmitter<CustomEvent<{ type: IRevoGridDimensionRows; source: IRevoGridDataType[]; }>>;
  /**
   * Emitted before a column update is applied.
Listeners can use this event to perform any necessary actions or modifications before the column update is finalized.
   */
  beforecolumnsset: EventEmitter<CustomEvent<IRevoGridColumnCollection>>;
  /**
   * Emitted before a column update is applied, after the column set is gathered and the viewport is updated.
Useful for performing actions or modifications before the final application of the column update.
   */
  beforecolumnapplied: EventEmitter<CustomEvent<IRevoGridColumnCollection>>;
  /**
   * Column updated
   */
  aftercolumnsset: EventEmitter<CustomEvent<{ columns: IRevoGridColumnCollection; order: Record<IRevoGridColumnProp, 'asc' | 'desc' | undefined>; }>>;
  /**
   * Emitted before applying a filter to the data source.
Use e.preventDefault() to prevent cell focus change.
Modify the @collection if you need to change filters.
   */
  beforefilterapply: EventEmitter<CustomEvent<{ collection: IRevoGridFilterCollection }>>;
  /**
   * Emitted before applying a filter to the data source.
Use e.preventDefault() to prevent the default behavior of trimming values and applying the filter.
Modify the `collection` property if you want to change the filters.
Modify the `itemsToFilter` property if you want to filter the indexes for trimming.
   */
  beforefiltertrimmed: EventEmitter<CustomEvent<{ collection: IRevoGridFilterCollection; itemsToFilter: Record<number, boolean>; }>>;
  /**
   * Emitted before trimming values.
Use e.preventDefault() to prevent the default behavior of trimming values.
Modify the `trimmed` property if you want to filter the indexes for trimming.
   */
  beforetrimmed: EventEmitter<CustomEvent<{ trimmed: Record<number, boolean>; trimmedType: string; type: string; }>>;
  /**
   * Emitted after trimmed values have been applied.
Useful for notifying when trimming of values has taken place.
   */
  aftertrimmed: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the viewport is scrolled.
Useful for tracking viewport scrolling events.
   */
  viewportscroll: EventEmitter<CustomEvent<IRevoGridViewPortScrollEvent>>;
  /**
   * Before export
Use e.preventDefault() to prevent export
Replace data in Event in case you want to modify it in export
   */
  beforeexport: EventEmitter<CustomEvent<IRevoGridDataInput>>;
  /**
   * Emitted before editing starts.
Use e.preventDefault() to prevent the default edit behavior.
   */
  beforeeditstart: EventEmitter<CustomEvent<IRevoGridBeforeSaveDataDetails>>;
  /**
   * Emitted after column resizing.
Useful for retrieving the resized columns.
   */
  aftercolumnresize: EventEmitter<CustomEvent<{ [index: number]: IRevoGridColumnRegular; }>>;
  /**
   * Emitted before the row definition is applied.
Useful for modifying or preventing the default row definition behavior.
   */
  beforerowdefinition: EventEmitter<CustomEvent<{ vals: any; oldVals: any }>>;
  /**
   * Emitted when the filter configuration is changed
   */
  filterconfigchanged: EventEmitter<CustomEvent<any>>;
  /**
   * Emmited when the row headers are changed.
   */
  rowheaderschanged: EventEmitter<CustomEvent<any>>;
  /**
   * Emmited before the grid is rendered.
   */
  beforegridrender: EventEmitter<CustomEvent<any>>;
  /**
   * Emmited after the grid is initialized. Connected to the DOM.
   */
  aftergridinit: EventEmitter<CustomEvent<any>>;
  /**
   * Emmited after the additional data is changed
   */
  additionaldatachanged: EventEmitter<CustomEvent<any>>;
  /**
   * Emmited after the theme is changed
   */
  afterthemechanged: EventEmitter<CustomEvent<IRevoGridTheme>>;
}


