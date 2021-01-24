/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@revolist/revogrid';

import { RevoGridComponent as IRevoGridComponent } from '@revolist/revogrid/dist/types/components/revo-grid/revo-grid';
export declare interface RevoGrid extends Components.RevoGrid {}
@ProxyCmp({
  inputs: ['autoSizeColumn', 'canFocus', 'colSize', 'columnTypes', 'columns', 'editors', 'exporting', 'filter', 'frameSize', 'grouping', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'theme', 'trimmedRows'],
  methods: ['refresh', 'scrollToRow', 'scrollToColumnIndex', 'scrollToColumnProp', 'updateColumns', 'addTrimmed', 'scrollToCoordinate', 'setCellEdit', 'registerVNode', 'getSource', 'getVisibleSource', 'getSourceStore', 'getColumnStore', 'updateColumnSorting', 'getColumns', 'clearFocus', 'getPlugins']
})
@Component({
  selector: 'revo-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoSizeColumn', 'canFocus', 'colSize', 'columnTypes', 'columns', 'editors', 'exporting', 'filter', 'frameSize', 'grouping', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'theme', 'trimmedRows'],
  outputs: ['beforeEdit', 'beforeRangeEdit', 'afterEdit', 'beforeAutofill', 'beforeRange', 'rowOrderChanged', 'beforeSourceSortingApply', 'beforeSortingApply', 'beforeSorting', 'rowDragStart', 'headerClick', 'beforeCellFocus', 'beforeSourceSet', 'afterSourceSet', 'beforeColumnsSet', 'afterColumnsSet', 'beforeFilterApply', 'viewportScroll', 'beforeExport', 'beforeEditStart']
})
export class RevoGrid {
  /** Before edit event.
Triggered before edit data applied.
Use e.preventDefault() to prevent edit data set and use you own. 
Use e.val = {your value} to replace edit result with your own. */
  beforeEdit!: IRevoGridComponent['beforeEdit'];
  /** Before range edit event.
Triggered before range data applied, when range selection happened.
Use e.preventDefault() to prevent edit data set and use you own. */
  beforeRangeEdit!: IRevoGridComponent['beforeRangeEdit'];
  /** After edit.
Triggered when after data applied or Range changeged. */
  afterEdit!: IRevoGridComponent['afterEdit'];
  /** Before autofill.
Triggered before autofill applied.
Use e.preventDefault() to prevent edit data apply. */
  beforeAutofill!: IRevoGridComponent['beforeAutofill'];
  /** Before range apply.
Triggered before range applied.
Use e.preventDefault() to prevent range. */
  beforeRange!: IRevoGridComponent['beforeRange'];
  /** Before row order apply.
Use e.preventDefault() to prevent row order change. */
  rowOrderChanged!: IRevoGridComponent['rowOrderChanged'];
  /** Before source update sorting apply.
Use this event if you intended to prevent sorting on data update.
Use e.preventDefault() to prevent sorting data change during rows source update. */
  beforeSourceSortingApply!: IRevoGridComponent['beforeSourceSortingApply'];
  /** Before sorting apply.
Use e.preventDefault() to prevent sorting data change. */
  beforeSortingApply!: IRevoGridComponent['beforeSortingApply'];
  /** Before sorting event.
Initial sorting triggered, if this event stops no other event called.
Use e.preventDefault() to prevent sorting. */
  beforeSorting!: IRevoGridComponent['beforeSorting'];
  /** Row order change started.
Use e.preventDefault() to prevent row order change. 
Use e.text = 'new name' to change item name on start. */
  rowDragStart!: IRevoGridComponent['rowDragStart'];
  /** On header click. */
  headerClick!: IRevoGridComponent['headerClick'];
  /** Before cell focus changed.
Use e.preventDefault() to prevent cell focus change. */
  beforeCellFocus!: IRevoGridComponent['beforeCellFocus'];
  /** Before data apply.
You can override data source here */
  beforeSourceSet!: IRevoGridComponent['beforeSourceSet'];
  /** After rows updated */
  afterSourceSet!: IRevoGridComponent['afterSourceSet'];
  /** Before column update */
  beforeColumnsSet!: IRevoGridComponent['beforeColumnsSet'];
  /** Column updated */
  afterColumnsSet!: IRevoGridComponent['afterColumnsSet'];
  /** Before filter applied to data source
Use e.preventDefault() to prevent cell focus change
Update @collection if you wish to change filters on the flight */
  beforeFilterApply!: IRevoGridComponent['beforeFilterApply'];
  /** Triggered when view port scrolled */
  viewportScroll!: IRevoGridComponent['viewportScroll'];
  /** Before export
Use e.preventDefault() to prevent export
Replace data in Event in case you want to modify it in export */
  beforeExport!: IRevoGridComponent['beforeExport'];
  /** Before edit started
Use e.preventDefault() to prevent edit */
  beforeEditStart!: IRevoGridComponent['beforeEditStart'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforeEdit', 'beforeRangeEdit', 'afterEdit', 'beforeAutofill', 'beforeRange', 'rowOrderChanged', 'beforeSourceSortingApply', 'beforeSortingApply', 'beforeSorting', 'rowDragStart', 'headerClick', 'beforeCellFocus', 'beforeSourceSet', 'afterSourceSet', 'beforeColumnsSet', 'afterColumnsSet', 'beforeFilterApply', 'viewportScroll', 'beforeExport', 'beforeEditStart']);
  }
}

import { Clipboard as IClipboard } from '@revolist/revogrid/dist/types/components/clipboard/revogr-clipboard';
export declare interface RevogrClipboard extends Components.RevogrClipboard {}
@ProxyCmp({
  methods: ['doCopy']
})
@Component({
  selector: 'revogr-clipboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  outputs: ['copyRegion', 'pasteRegion']
})
export class RevogrClipboard {
  /**  */
  copyRegion!: IClipboard['copyRegion'];
  /**  */
  pasteRegion!: IClipboard['pasteRegion'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['copyRegion', 'pasteRegion']);
  }
}

import { RevogrData as IRevogrData } from '@revolist/revogrid/dist/types/components/data/revogr-data';
export declare interface RevogrData extends Components.RevogrData {}
@ProxyCmp({
  inputs: ['canDrag', 'colData', 'dataStore', 'dimensionRow', 'range', 'readonly', 'rowClass', 'rowSelectionStore', 'viewportCol', 'viewportRow']
})
@Component({
  selector: 'revogr-data',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canDrag', 'colData', 'dataStore', 'dimensionRow', 'range', 'readonly', 'rowClass', 'rowSelectionStore', 'viewportCol', 'viewportRow'],
  outputs: ['dragStartCell']
})
export class RevogrData {
  /**  */
  dragStartCell!: IRevogrData['dragStartCell'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dragStartCell']);
  }
}

import { Edit as IEdit } from '@revolist/revogrid/dist/types/components/overlay/revogr-edit';
export declare interface RevogrEdit extends Components.RevogrEdit {}
@ProxyCmp({
  inputs: ['column', 'editCell', 'editor']
})
@Component({
  selector: 'revogr-edit',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['column', 'editCell', 'editor'],
  outputs: ['cellEdit', 'closeEdit']
})
export class RevogrEdit {
  /**  */
  cellEdit!: IEdit['cellEdit'];
  /** Close editor event */
  closeEdit!: IEdit['closeEdit'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['cellEdit', 'closeEdit']);
  }
}

import { FilterPanel as IFilterPanel } from '@revolist/revogrid/dist/types/plugins/filter/filter.pop';
export declare interface RevogrFilterPanel extends Components.RevogrFilterPanel {}
@ProxyCmp({
  inputs: ['filterEntities', 'filterNames', 'filterTypes', 'uuid'],
  methods: ['show', 'getChanges']
})
@Component({
  selector: 'revogr-filter-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['filterEntities', 'filterNames', 'filterTypes', 'uuid'],
  outputs: ['filterChange']
})
export class RevogrFilterPanel {
  /**  */
  filterChange!: IFilterPanel['filterChange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['filterChange']);
  }
}


export declare interface RevogrFocus extends Components.RevogrFocus {}
@ProxyCmp({
  inputs: ['dimensionCol', 'dimensionRow', 'selectionStore']
})
@Component({
  selector: 'revogr-focus',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dimensionCol', 'dimensionRow', 'selectionStore']
})
export class RevogrFocus {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { RevogrHeaderComponent as IRevogrHeaderComponent } from '@revolist/revogrid/dist/types/components/header/revogr-header';
export declare interface RevogrHeader extends Components.RevogrHeader {}
@ProxyCmp({
  inputs: ['canResize', 'colData', 'columnFilter', 'dimensionCol', 'groupingDepth', 'groups', 'parent', 'selectionStore', 'viewportCol']
})
@Component({
  selector: 'revogr-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canResize', 'colData', 'columnFilter', 'dimensionCol', 'groupingDepth', 'groups', 'parent', 'selectionStore', 'viewportCol'],
  outputs: ['initialHeaderClick', 'headerResize', 'headerDblClick']
})
export class RevogrHeader {
  /**  */
  initialHeaderClick!: IRevogrHeaderComponent['initialHeaderClick'];
  /**  */
  headerResize!: IRevogrHeaderComponent['headerResize'];
  /**  */
  headerDblClick!: IRevogrHeaderComponent['headerDblClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['initialHeaderClick', 'headerResize', 'headerDblClick']);
  }
}

import { OrderEditor as IOrderEditor } from '@revolist/revogrid/dist/types/components/order/revogr-order-editor';
export declare interface RevogrOrderEditor extends Components.RevogrOrderEditor {}
@ProxyCmp({
  inputs: ['dataStore', 'dimensionCol', 'dimensionRow', 'parent'],
  methods: ['dragStart', 'endOrder', 'clearOrder']
})
@Component({
  selector: 'revogr-order-editor',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dataStore', 'dimensionCol', 'dimensionRow', 'parent'],
  outputs: ['internalRowDragStart', 'internalRowDragEnd', 'internalRowDrag', 'internalRowMouseMove', 'initialRowDropped']
})
export class RevogrOrderEditor {
  /** Row drag started */
  internalRowDragStart!: IOrderEditor['internalRowDragStart'];
  /** Row drag ended */
  internalRowDragEnd!: IOrderEditor['internalRowDragEnd'];
  /** Row move */
  internalRowDrag!: IOrderEditor['internalRowDrag'];
  /** Row mouse move */
  internalRowMouseMove!: IOrderEditor['internalRowMouseMove'];
  /** Row dragged, new range ready to be applied */
  initialRowDropped!: IOrderEditor['initialRowDropped'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['internalRowDragStart', 'internalRowDragEnd', 'internalRowDrag', 'internalRowMouseMove', 'initialRowDropped']);
  }
}

import { OverlaySelection as IOverlaySelection } from '@revolist/revogrid/dist/types/components/overlay/revogr-overlay-selection';
export declare interface RevogrOverlaySelection extends Components.RevogrOverlaySelection {}
@ProxyCmp({
  inputs: ['canDrag', 'colData', 'dataStore', 'dimensionCol', 'dimensionRow', 'editors', 'lastCell', 'range', 'readonly', 'selectionStore']
})
@Component({
  selector: 'revogr-overlay-selection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canDrag', 'colData', 'dataStore', 'dimensionCol', 'dimensionRow', 'editors', 'lastCell', 'range', 'readonly', 'selectionStore'],
  outputs: ['internalCopy', 'internalPaste', 'internalCellEdit', 'internalFocusCell', 'setEdit', 'setRange', 'setTempRange', 'focusCell', 'unregister', 'internalSelectionChanged', 'internalRangeDataApply']
})
export class RevogrOverlaySelection {
  /**  */
  internalCopy!: IOverlaySelection['internalCopy'];
  /**  */
  internalPaste!: IOverlaySelection['internalPaste'];
  /**  */
  internalCellEdit!: IOverlaySelection['internalCellEdit'];
  /**  */
  internalFocusCell!: IOverlaySelection['internalFocusCell'];
  /**  */
  setEdit!: IOverlaySelection['setEdit'];
  /**  */
  setRange!: IOverlaySelection['setRange'];
  /**  */
  setTempRange!: IOverlaySelection['setTempRange'];
  /**  */
  focusCell!: IOverlaySelection['focusCell'];
  /**  */
  unregister!: IOverlaySelection['unregister'];
  /** Selection range changed */
  internalSelectionChanged!: IOverlaySelection['internalSelectionChanged'];
  /** Range data apply */
  internalRangeDataApply!: IOverlaySelection['internalRangeDataApply'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['internalCopy', 'internalPaste', 'internalCellEdit', 'internalFocusCell', 'setEdit', 'setRange', 'setTempRange', 'focusCell', 'unregister', 'internalSelectionChanged', 'internalRangeDataApply']);
  }
}

import { RevogrScrollVirtual as IRevogrScrollVirtual } from '@revolist/revogrid/dist/types/components/scrollable/revogr-scroll-virtual';
export declare interface RevogrScrollVirtual extends Components.RevogrScrollVirtual {}
@ProxyCmp({
  inputs: ['dimension', 'dimensionStore', 'viewportStore'],
  methods: ['setScroll', 'changeScroll']
})
@Component({
  selector: 'revogr-scroll-virtual',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dimension', 'dimensionStore', 'viewportStore'],
  outputs: ['scrollVirtual']
})
export class RevogrScrollVirtual {
  /**  */
  scrollVirtual!: IRevogrScrollVirtual['scrollVirtual'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollVirtual']);
  }
}


export declare interface RevogrTempRange extends Components.RevogrTempRange {}
@ProxyCmp({
  inputs: ['dimensionCol', 'dimensionRow', 'selectionStore']
})
@Component({
  selector: 'revogr-temp-range',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['dimensionCol', 'dimensionRow', 'selectionStore']
})
export class RevogrTempRange {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

import { RevogrViewport as IRevogrViewport } from '@revolist/revogrid/dist/types/components/viewport/revogr-viewport';
export declare interface RevogrViewport extends Components.RevogrViewport {}
@ProxyCmp({
  inputs: ['columnFilter', 'columnStores', 'dimensions', 'editors', 'range', 'readonly', 'resize', 'rowClass', 'rowHeaders', 'rowStores', 'uuid', 'viewports'],
  methods: ['scrollToCoordinate', 'clearFocus', 'setEdit']
})
@Component({
  selector: 'revogr-viewport',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['columnFilter', 'columnStores', 'dimensions', 'editors', 'range', 'readonly', 'resize', 'rowClass', 'rowHeaders', 'rowStores', 'uuid', 'viewports'],
  outputs: ['setDimensionSize', 'setViewportCoordinate', 'setViewportSize', 'initialRowDragStart', 'beforeEditStart']
})
export class RevogrViewport {
  /**  */
  setDimensionSize!: IRevogrViewport['setDimensionSize'];
  /**  */
  setViewportCoordinate!: IRevogrViewport['setViewportCoordinate'];
  /**  */
  setViewportSize!: IRevogrViewport['setViewportSize'];
  /**  */
  initialRowDragStart!: IRevogrViewport['initialRowDragStart'];
  /**  */
  beforeEditStart!: IRevogrViewport['beforeEditStart'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['setDimensionSize', 'setViewportCoordinate', 'setViewportSize', 'initialRowDragStart', 'beforeEditStart']);
  }
}

import { RevogrViewportScroll as IRevogrViewportScroll } from '@revolist/revogrid/dist/types/components/scroll/revogr-viewport-scroll';
export declare interface RevogrViewportScroll extends Components.RevogrViewportScroll {}
@ProxyCmp({
  inputs: ['contentHeight', 'contentWidth'],
  methods: ['setScroll', 'changeScroll']
})
@Component({
  selector: 'revogr-viewport-scroll',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['contentHeight', 'contentWidth'],
  outputs: ['scrollViewport', 'resizeViewport']
})
export class RevogrViewportScroll {
  /**  */
  scrollViewport!: IRevogrViewportScroll['scrollViewport'];
  /**  */
  resizeViewport!: IRevogrViewportScroll['resizeViewport'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollViewport', 'resizeViewport']);
  }
}
