/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@revolist/revogrid';


@ProxyCmp({
  inputs: ['additionalData', 'applyOnClose', 'autoSizeColumn', 'canFocus', 'canMoveColumns', 'colSize', 'columnTypes', 'columns', 'disableVirtualX', 'disableVirtualY', 'editors', 'exporting', 'filter', 'focusTemplate', 'frameSize', 'grouping', 'jobsBeforeRender', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'stretch', 'theme', 'trimmedRows', 'useClipboard'],
  methods: ['refresh', 'setDataAt', 'scrollToRow', 'scrollToColumnIndex', 'scrollToColumnProp', 'updateColumns', 'addTrimmed', 'scrollToCoordinate', 'setCellEdit', 'setCellsFocus', 'registerVNode', 'getSource', 'getVisibleSource', 'getSourceStore', 'getColumnStore', 'updateColumnSorting', 'clearSorting', 'getColumns', 'clearFocus', 'getPlugins', 'getFocused', 'getContentSize', 'getSelectedRange']
})
@Component({
  selector: 'revo-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalData', 'applyOnClose', 'autoSizeColumn', 'canFocus', 'canMoveColumns', 'colSize', 'columnTypes', 'columns', 'disableVirtualX', 'disableVirtualY', 'editors', 'exporting', 'filter', 'focusTemplate', 'frameSize', 'grouping', 'jobsBeforeRender', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'stretch', 'theme', 'trimmedRows', 'useClipboard'],
})
export class RevoGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['contentsizechanged', 'beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforeange', 'afterfocus', 'roworderchanged', 'beforesortingapply', 'beforesorting', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'beforeanysource', 'aftersourceset', 'afteranysource', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart', 'aftercolumnresize', 'beforerowdefinition', 'filterconfigchanged', 'rowheaderschanged', 'beforegridrender']);
  }
}


import type { MultiDimensionType as IRevoGridMultiDimensionType } from '@revolist/revogrid';
import type { BeforeSaveDataDetails as IRevoGridBeforeSaveDataDetails } from '@revolist/revogrid';
import type { BeforeRangeSaveDataDetails as IRevoGridBeforeRangeSaveDataDetails } from '@revolist/revogrid';
import type { AfterEditEvent as IRevoGridAfterEditEvent } from '@revolist/revogrid';
import type { ChangedRange as IRevoGridChangedRange } from '@revolist/revogrid';
import type { ColumnRegular as IRevoGridColumnRegular } from '@revolist/revogrid';
import type { PositionItem as IRevoGridPositionItem } from '@revolist/revogrid';
import type { FocusedData as IRevoGridFocusedData } from '@revolist/revogrid';
import type { DimensionRows as IRevoGridDimensionRows } from '@revolist/revogrid';
import type { DataType as IRevoGridDataType } from '@revolist/revogrid';
import type { ColumnCollection as IRevoGridColumnCollection } from '@revolist/revogrid';
import type { ColumnProp as IRevoGridColumnProp } from '@revolist/revogrid';
import type { FilterCollection as IRevoGridFilterCollection } from '@revolist/revogrid';
import type { ViewPortScrollEvent as IRevoGridViewPortScrollEvent } from '@revolist/revogrid';
import type { DataInput as IRevoGridDataInput } from '@revolist/revogrid';

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
  beforeange: EventEmitter<CustomEvent<IRevoGridChangedRange>>;
  /**
   * Triggered after focus render finished.
Can be used to access a focus element through `event.target`
   */
  afterfocus: EventEmitter<CustomEvent<{ model: any; column: IRevoGridColumnRegular; }>>;
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
  aftercolumnsset: EventEmitter<CustomEvent<{ columns: IRevoGridColumnCollection; order: Record<IRevoGridColumnProp, 'asc' | 'desc'>; }>>;
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
}


@ProxyCmp({
  inputs: ['readonly'],
  methods: ['doCopy']
})
@Component({
  selector: 'revogr-clipboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['readonly'],
})
export class RevogrClipboard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforepaste', 'beforepasteapply', 'pasteregion', 'afterpasteapply', 'beforecut', 'clearregion', 'beforecopy', 'beforecopyapply', 'copyregion']);
  }
}


export declare interface RevogrClipboard extends Components.RevogrClipboard {
  /**
   * Paste 1. Fired before paste applied to the grid @property {string} raw - raw data from clipboard,@property {ClipboardEvent} event - original event,@property {boolean} defaultPrevented - if true, paste will be canceled
   */
  beforepaste: EventEmitter<CustomEvent<any>>;
  /**
   * Paste 2. Fired before paste applied to the grid and after data parsed @property {string} raw - raw data from clipboard,@property {string[][]} parsed - parsed data
   */
  beforepasteapply: EventEmitter<CustomEvent<any>>;
  /**
   * Paste 3. Internal method. When data region is ready pass it to the top. @property {string[][]} data - data to paste,@property {boolean} defaultPrevented - if true, paste will be canceled
   */
  pasteregion: EventEmitter<CustomEvent<string[][]>>;
  /**
   * Paste 4. Fired after paste applied to the grid @property {string} raw - raw data from clipboard,@property {string[][]} parsed - parsed data,@property {ClipboardEvent} event - original event,@property {boolean} defaultPrevented - if true, paste will be canceled
   */
  afterpasteapply: EventEmitter<CustomEvent<any>>;
  /**
   * Cut 1. Fired before cut triggered @property {ClipboardEvent} event - original event,@property {boolean} defaultPrevented - if true, cut will be canceled
   */
  beforecut: EventEmitter<CustomEvent<any>>;
  /**
   * Cut 2. Clears region when cut is done
   */
  clearregion: EventEmitter<CustomEvent<DataTransfer>>;
  /**
   * Copy 1. Fired before copy triggered @property {ClipboardEvent} event - original event,@property {boolean} defaultPrevented - if true, copy will be canceled
   */
  beforecopy: EventEmitter<CustomEvent<any>>;
  /**
   * Copy Method 1. Fired before copy applied to the clipboard from outside. @property {DataTransfer} event - original event,@property {string} data - data to copy,@property {boolean} defaultPrevented - if true, copy will be canceled
   */
  beforecopyapply: EventEmitter<CustomEvent<any>>;
  /**
   * Copy 2. Fired when region copied @property {DataTransfer} data - data to copy,@property {boolean} defaultPrevented - if true, copy will be canceled
   */
  copyregion: EventEmitter<CustomEvent<DataTransfer>>;
}


@ProxyCmp({
  inputs: ['additionalData', 'colData', 'colType', 'dataStore', 'dimensionRow', 'jobsBeforeRender', 'range', 'readonly', 'rowClass', 'rowSelectionStore', 'type', 'viewportCol', 'viewportRow'],
  methods: ['updateCell']
})
@Component({
  selector: 'revogr-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalData', 'colData', 'colType', 'dataStore', 'dimensionRow', 'jobsBeforeRender', 'range', 'readonly', 'rowClass', 'rowSelectionStore', 'type', 'viewportCol', 'viewportRow'],
})
export class RevogrData {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforerowrender', 'afterrender', 'beforecellrender', 'dragstartcell']);
  }
}


import type { BeforeRowRenderEvent as IRevogrDataBeforeRowRenderEvent } from '@revolist/revogrid';
import type { DimensionRows as IRevogrDataDimensionRows } from '@revolist/revogrid';
import type { BeforeCellRenderEvent as IRevogrDataBeforeCellRenderEvent } from '@revolist/revogrid';
import type { DragStartEvent as IRevogrDataDragStartEvent } from '@revolist/revogrid';

export declare interface RevogrData extends Components.RevogrData {
  /**
   * Before each row render
   */
  beforerowrender: EventEmitter<CustomEvent<IRevogrDataBeforeRowRenderEvent>>;
  /**
   * When data render finished for the designated type
   */
  afterrender: EventEmitter<CustomEvent<{ type: IRevogrDataDimensionRows }>>;
  /**
   * Before each cell render function. Allows to override cell properties
   */
  beforecellrender: EventEmitter<CustomEvent<IRevogrDataBeforeCellRenderEvent>>;
  /**
   * Event emitted on cell drag start
   */
  dragstartcell: EventEmitter<CustomEvent<IRevogrDataDragStartEvent>>;
}


@ProxyCmp({
  inputs: ['additionalData', 'column', 'editCell', 'editor', 'saveOnClose'],
  methods: ['cancelChanges', 'beforeDisconnect']
})
@Component({
  selector: 'revogr-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalData', 'column', 'editCell', 'editor', 'saveOnClose'],
})
export class RevogrEdit {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['celledit', 'closeedit']);
  }
}


import type { SaveDataDetails as IRevogrEditSaveDataDetails } from '@revolist/revogrid';

export declare interface RevogrEdit extends Components.RevogrEdit {
  /**
   * Cell edit event
   */
  celledit: EventEmitter<CustomEvent<IRevogrEditSaveDataDetails>>;
  /**
   * Close editor event
pass true if requires focus next
   */
  closeedit: EventEmitter<CustomEvent<boolean | undefined>>;
}


@ProxyCmp({
  inputs: ['disableDynamicFiltering', 'filterCaptions', 'filterEntities', 'filterItems', 'filterNames', 'filterTypes', 'uuid'],
  methods: ['show', 'getChanges']
})
@Component({
  selector: 'revogr-filter-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disableDynamicFiltering', 'filterCaptions', 'filterEntities', 'filterItems', 'filterNames', 'filterTypes', 'uuid'],
})
export class RevogrFilterPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filterChange']);
  }
}


import type { MultiFilterItem as IRevogrFilterPanelMultiFilterItem } from '@revolist/revogrid';

export declare interface RevogrFilterPanel extends Components.RevogrFilterPanel {

  filterChange: EventEmitter<CustomEvent<IRevogrFilterPanelMultiFilterItem>>;
}


@ProxyCmp({
  inputs: ['colData', 'colType', 'dataStore', 'dimensionCol', 'dimensionRow', 'focusTemplate', 'rowType', 'selectionStore']
})
@Component({
  selector: 'revogr-focus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['colData', 'colType', 'dataStore', 'dimensionCol', 'dimensionRow', 'focusTemplate', 'rowType', 'selectionStore'],
})
export class RevogrFocus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforefocusrender', 'beforescrollintoview', 'afterfocus']);
  }
}


import type { FocusRenderEvent as IRevogrFocusFocusRenderEvent } from '@revolist/revogrid';
import type { ColumnRegular as IRevogrFocusColumnRegular } from '@revolist/revogrid';

export declare interface RevogrFocus extends Components.RevogrFocus {
  /**
   * Before focus render event.
Can be prevented by event.preventDefault().
If preventDefault used slot will be rendered.
   */
  beforefocusrender: EventEmitter<CustomEvent<IRevogrFocusFocusRenderEvent>>;
  /**
   * Before focus changed verify if it's in view and scroll viewport into this view
Can be prevented by event.preventDefault()
   */
  beforescrollintoview: EventEmitter<CustomEvent<{ el: HTMLElement }>>;
  /**
   * Used to setup properties after focus was rendered
   */
  afterfocus: EventEmitter<CustomEvent<{ model: any; column: IRevogrFocusColumnRegular; }>>;
}


@ProxyCmp({
  inputs: ['additionalData', 'canResize', 'colData', 'columnFilter', 'dimensionCol', 'groupingDepth', 'groups', 'readonly', 'resizeHandler', 'selectionStore', 'type', 'viewportCol']
})
@Component({
  selector: 'revogr-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalData', 'canResize', 'colData', 'columnFilter', 'dimensionCol', 'groupingDepth', 'groups', 'readonly', 'resizeHandler', 'selectionStore', 'type', 'viewportCol'],
})
export class RevogrHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforeheaderclick', 'headerresize', 'beforeheaderresize', 'headerdblclick']);
  }
}


import type { InitialHeaderClick as IRevogrHeaderInitialHeaderClick } from '@revolist/revogrid';
import type { ViewSettingSizeProp as IRevogrHeaderViewSettingSizeProp } from '@revolist/revogrid';
import type { ColumnRegular as IRevogrHeaderColumnRegular } from '@revolist/revogrid';

export declare interface RevogrHeader extends Components.RevogrHeader {
  /**
   * On initial header click
   */
  beforeheaderclick: EventEmitter<CustomEvent<IRevogrHeaderInitialHeaderClick>>;
  /**
   * On header resize
   */
  headerresize: EventEmitter<CustomEvent<IRevogrHeaderViewSettingSizeProp>>;
  /**
   * On before header resize
   */
  beforeheaderresize: EventEmitter<CustomEvent<IRevogrHeaderColumnRegular[]>>;
  /**
   * On header double click
   */
  headerdblclick: EventEmitter<CustomEvent<IRevogrHeaderInitialHeaderClick>>;
}


@ProxyCmp({
  inputs: ['dataStore', 'dimensionCol', 'dimensionRow', 'parent'],
  methods: ['dragStart', 'endOrder', 'clearOrder']
})
@Component({
  selector: 'revogr-order-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dataStore', 'dimensionCol', 'dimensionRow', 'parent'],
})
export class RevogrOrderEditor {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['rowdragstartinit', 'rowdragendinit', 'rowdragmoveinit', 'rowdragmousemove', 'rowdropinit']);
  }
}


import type { Cell as IRevogrOrderEditorCell } from '@revolist/revogrid';
import type { PositionItem as IRevogrOrderEditorPositionItem } from '@revolist/revogrid';

export declare interface RevogrOrderEditor extends Components.RevogrOrderEditor {
  /**
   * Row drag started
   */
  rowdragstartinit: EventEmitter<CustomEvent<{ cell: IRevogrOrderEditorCell; text: string; pos: IRevogrOrderEditorPositionItem; event: MouseEvent; }>>;
  /**
   * Row drag ended started
   */
  rowdragendinit: EventEmitter<CustomEvent<any>>;
  /**
   * Row move started
   */
  rowdragmoveinit: EventEmitter<CustomEvent<IRevogrOrderEditorPositionItem>>;
  /**
   * Row mouse move started
   */
  rowdragmousemove: EventEmitter<CustomEvent<IRevogrOrderEditorCell>>;
  /**
   * Row dragged, new range ready to be applied
   */
  rowdropinit: EventEmitter<CustomEvent<{ from: number; to: number; }>>;
}


@ProxyCmp({
  inputs: ['additionalData', 'applyChangesOnClose', 'canDrag', 'colData', 'dataStore', 'dimensionCol', 'dimensionRow', 'editors', 'isMobileDevice', 'lastCell', 'range', 'readonly', 'selectionStore', 'useClipboard']
})
@Component({
  selector: 'revogr-overlay-selection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalData', 'applyChangesOnClose', 'canDrag', 'colData', 'dataStore', 'dimensionCol', 'dimensionRow', 'editors', 'isMobileDevice', 'lastCell', 'range', 'readonly', 'selectionStore', 'useClipboard'],
})
export class RevogrOverlaySelection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforecopyregion', 'beforepasteregion', 'celleditapply', 'beforecellfocusinit', 'setedit', 'beforeapplyrange', 'beforesetrange', 'beforeeditrender', 'setrange', 'selectall', 'canceledit', 'settemprange', 'applyfocus', 'focuscell', 'beforerangedataapply', 'selectionchangeinit', 'beforerangecopyapply', 'rangeeditapply', 'clipboardrangecopy', 'clipboardrangepaste', 'beforekeydown', 'beforekeyup', 'beforecellsave']);
  }
}


import type { BeforeSaveDataDetails as IRevogrOverlaySelectionBeforeSaveDataDetails } from '@revolist/revogrid';
import type { BeforeEdit as IRevogrOverlaySelectionBeforeEdit } from '@revolist/revogrid';
import type { FocusRenderEvent as IRevogrOverlaySelectionFocusRenderEvent } from '@revolist/revogrid';
import type { RangeArea as IRevogrOverlaySelectionRangeArea } from '@revolist/revogrid';
import type { MultiDimensionType as IRevogrOverlaySelectionMultiDimensionType } from '@revolist/revogrid';
import type { TempRange as IRevogrOverlaySelectionTempRange } from '@revolist/revogrid';
import type { ApplyFocusEvent as IRevogrOverlaySelectionApplyFocusEvent } from '@revolist/revogrid';
import type { ChangedRange as IRevogrOverlaySelectionChangedRange } from '@revolist/revogrid';
import type { BeforeRangeSaveDataDetails as IRevogrOverlaySelectionBeforeRangeSaveDataDetails } from '@revolist/revogrid';

export declare interface RevogrOverlaySelection extends Components.RevogrOverlaySelection {
  /**
   * Before clipboard copy happened. Validate data before copy.
To prevent the default behavior of editing data and use your own implementation, call `e.preventDefault()`.
   */
  beforecopyregion: EventEmitter<CustomEvent<any>>;
  /**
   * Before region paste happened.
   */
  beforepasteregion: EventEmitter<CustomEvent<any>>;
  /**
   * Cell edit apply to the data source.
Triggers datasource edit on the root level.
   */
  celleditapply: EventEmitter<CustomEvent<IRevogrOverlaySelectionBeforeSaveDataDetails>>;
  /**
   * Before cell focus.
   */
  beforecellfocusinit: EventEmitter<CustomEvent<IRevogrOverlaySelectionBeforeSaveDataDetails>>;
  /**
   * Set edit cell.
   */
  setedit: EventEmitter<CustomEvent<IRevogrOverlaySelectionBeforeEdit>>;
  /**
   * Before range applied.
   */
  beforeapplyrange: EventEmitter<CustomEvent<IRevogrOverlaySelectionFocusRenderEvent>>;
  /**
   * Before range selection applied.
   */
  beforesetrange: EventEmitter<CustomEvent<any>>;
  /**
   * Before editor render.
   */
  beforeeditrender: EventEmitter<CustomEvent<IRevogrOverlaySelectionFocusRenderEvent>>;
  /**
   * Set range.
   */
  setrange: EventEmitter<CustomEvent<IRevogrOverlaySelectionRangeArea & { type: IRevogrOverlaySelectionMultiDimensionType }>>;
  /**
   * Select all.
   */
  selectall: EventEmitter<CustomEvent<any>>;
  /**
   * Used for editors support when editor close requested.
   */
  canceledit: EventEmitter<CustomEvent<any>>;
  /**
   * Set temp range area during autofill.
   */
  settemprange: EventEmitter<CustomEvent<IRevogrOverlaySelectionTempRange | null>>;
  /**
   * Before cell get focused.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`.
   */
  applyfocus: EventEmitter<CustomEvent<IRevogrOverlaySelectionFocusRenderEvent>>;
  /**
   * Cell get focused.
To prevent the default behavior of applying the edit data, you can call `e.preventDefault()`.
   */
  focuscell: EventEmitter<CustomEvent<IRevogrOverlaySelectionApplyFocusEvent>>;
  /**
   * Range data apply.
   */
  beforerangedataapply: EventEmitter<CustomEvent<IRevogrOverlaySelectionFocusRenderEvent>>;
  /**
   * Selection range changed.
   */
  selectionchangeinit: EventEmitter<CustomEvent<IRevogrOverlaySelectionChangedRange>>;
  /**
   * Before range copy.
   */
  beforerangecopyapply: EventEmitter<CustomEvent<IRevogrOverlaySelectionChangedRange>>;
  /**
   * Range data apply.
Triggers datasource edit on the root level.
   */
  rangeeditapply: EventEmitter<CustomEvent<IRevogrOverlaySelectionBeforeRangeSaveDataDetails>>;
  /**
   * Range copy.
   */
  clipboardrangecopy: EventEmitter<CustomEvent<any>>;

  clipboardrangepaste: EventEmitter<CustomEvent<any>>;
  /**
   * Before key up event proxy, used to prevent key up trigger.
If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic.
Call preventDefault().
   */
  beforekeydown: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Before key down event proxy, used to prevent key down trigger.
If you have some custom behaviour event, use this event to check if it wasn't processed by internal logic.
Call preventDefault().
   */
  beforekeyup: EventEmitter<CustomEvent<KeyboardEvent>>;
  /**
   * Runs before cell save.
Can be used to override or cancel original save.
   */
  beforecellsave: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['additionalData', 'dataPorts', 'headerProp', 'height', 'jobsBeforeRender', 'resize', 'rowClass', 'rowHeaderColumn']
})
@Component({
  selector: 'revogr-row-headers',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['additionalData', 'dataPorts', 'headerProp', 'height', 'jobsBeforeRender', 'resize', 'rowClass', 'rowHeaderColumn'],
})
export class RevogrRowHeaders {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollview', 'ref']);
  }
}


import type { ViewPortScrollEvent as IRevogrRowHeadersViewPortScrollEvent } from '@revolist/revogrid';
import type { ElementScroll as IRevogrRowHeadersElementScroll } from '@revolist/revogrid';

export declare interface RevogrRowHeaders extends Components.RevogrRowHeaders {
  /**
   * Scroll viewport
   */
  scrollview: EventEmitter<CustomEvent<IRevogrRowHeadersViewPortScrollEvent>>;
  /**
   * Register element to scroll
   */
  ref: EventEmitter<CustomEvent<IRevogrRowHeadersElementScroll>>;
}


@ProxyCmp({
  inputs: ['dimension', 'dimensionStore', 'viewportStore'],
  methods: ['setScroll', 'changeScroll']
})
@Component({
  selector: 'revogr-scroll-virtual',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dimension', 'dimensionStore', 'viewportStore'],
})
export class RevogrScrollVirtual {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollvirtual']);
  }
}


import type { ViewPortScrollEvent as IRevogrScrollVirtualViewPortScrollEvent } from '@revolist/revogrid';

export declare interface RevogrScrollVirtual extends Components.RevogrScrollVirtual {
  /**
   * Scroll event
   */
  scrollvirtual: EventEmitter<CustomEvent<IRevogrScrollVirtualViewPortScrollEvent>>;
}


@ProxyCmp({
  inputs: ['dimensionCol', 'dimensionRow', 'selectionStore']
})
@Component({
  selector: 'revogr-temp-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dimensionCol', 'dimensionRow', 'selectionStore'],
})
export class RevogrTempRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface RevogrTempRange extends Components.RevogrTempRange {}


@ProxyCmp({
  inputs: ['contentHeight', 'contentWidth', 'rowHeader'],
  methods: ['setScroll', 'changeScroll', 'applyScroll']
})
@Component({
  selector: 'revogr-viewport-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contentHeight', 'contentWidth', 'rowHeader'],
})
export class RevogrViewportScroll {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollviewport', 'resizeviewport', 'scrollchange', 'scrollviewportsilent']);
  }
}


import type { ViewPortScrollEvent as IRevogrViewportScrollViewPortScrollEvent } from '@revolist/revogrid';
import type { ViewPortResizeEvent as IRevogrViewportScrollViewPortResizeEvent } from '@revolist/revogrid';
import type { DimensionType as IRevogrViewportScrollDimensionType } from '@revolist/revogrid';

export declare interface RevogrViewportScroll extends Components.RevogrViewportScroll {
  /**
   * Before scroll event
   */
  scrollviewport: EventEmitter<CustomEvent<IRevogrViewportScrollViewPortScrollEvent>>;
  /**
   * Viewport resize
   */
  resizeviewport: EventEmitter<CustomEvent<IRevogrViewportScrollViewPortResizeEvent>>;
  /**
   * Triggered on scroll change, can be used to get information about scroll visibility
   */
  scrollchange: EventEmitter<CustomEvent<{ type: IRevogrViewportScrollDimensionType; hasScroll: boolean; }>>;
  /**
   * Silently scroll to coordinate
Made to align negative coordinates for mobile devices
   */
  scrollviewportsilent: EventEmitter<CustomEvent<IRevogrViewportScrollViewPortScrollEvent>>;
}


@ProxyCmp({
  inputs: ['redraw']
})
@Component({
  selector: 'vnode-html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['redraw'],
})
export class VnodeHtml {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['html']);
  }
}


import type { VNode as IVnodeHtmlVNode } from '@revolist/revogrid';

export declare interface VnodeHtml extends Components.VnodeHtml {

  html: EventEmitter<CustomEvent<{ html: string; vnodes: IVnodeHtmlVNode[] }>>;
}


