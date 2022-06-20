/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@revolist/revogrid';

import { RevoGridComponent as IRevoGridComponent } from '@revolist/revogrid/dist/types/components/revo-grid/revo-grid';
export declare interface RevoGrid extends Components.RevoGrid {}
@ProxyCmp({
  inputs: ['autoSizeColumn', 'canFocus', 'colSize', 'columnTypes', 'columns', 'editors', 'exporting', 'filter', 'frameSize', 'grouping', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'stretch', 'theme', 'trimmedRows', 'useClipboard'],
  methods: ['refresh', 'scrollToRow', 'scrollToColumnIndex', 'scrollToColumnProp', 'updateColumns', 'addTrimmed', 'scrollToCoordinate', 'setCellEdit', 'registerVNode', 'getSource', 'getVisibleSource', 'getSourceStore', 'getColumnStore', 'updateColumnSorting', 'getColumns', 'clearFocus', 'getPlugins', 'getFocused']
})
@Component({
  selector: 'revo-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autoSizeColumn', 'canFocus', 'colSize', 'columnTypes', 'columns', 'editors', 'exporting', 'filter', 'frameSize', 'grouping', 'pinnedBottomSource', 'pinnedTopSource', 'plugins', 'range', 'readonly', 'resize', 'rowClass', 'rowDefinitions', 'rowHeaders', 'rowSize', 'source', 'stretch', 'theme', 'trimmedRows', 'useClipboard'],
  outputs: ['beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforeaange', 'roworderchanged', 'beforesourcesortingapply', 'beforesortingapply', 'beforesorting', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'aftersourceset', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart']
})
export class RevoGrid {
  /** Before edit event.
Triggered before edit data applied.
Use e.preventDefault() to prevent edit data set and use you own.
Use e.val = {your value} to replace edit result with your own. */
  beforeedit!: IRevoGridComponent['beforeedit'];
  /** Before range edit event.
Triggered before range data applied, when range selection happened.
Use e.preventDefault() to prevent edit data set and use you own. */
  beforerangeedit!: IRevoGridComponent['beforerangeedit'];
  /** After edit.
Triggered when after data applied or Range changeged. */
  afteredit!: IRevoGridComponent['afteredit'];
  /** Before autofill.
Triggered before autofill applied.
Use e.preventDefault() to prevent edit data apply. */
  beforeautofill!: IRevoGridComponent['beforeautofill'];
  /** Before range apply.
Triggered before range applied.
Use e.preventDefault() to prevent range. */
  beforeaange!: IRevoGridComponent['beforeaange'];
  /** Before rgRow order apply.
Use e.preventDefault() to prevent rgRow order change. */
  roworderchanged!: IRevoGridComponent['roworderchanged'];
  /** Before source update sorting apply.
Use this event if you intended to prevent sorting on data update.
Use e.preventDefault() to prevent sorting data change during rows source update. */
  beforesourcesortingapply!: IRevoGridComponent['beforesourcesortingapply'];
  /** Before sorting apply.
Use e.preventDefault() to prevent sorting data change. */
  beforesortingapply!: IRevoGridComponent['beforesortingapply'];
  /** Before sorting event.
Initial sorting triggered, if this event stops no other event called.
Use e.preventDefault() to prevent sorting. */
  beforesorting!: IRevoGridComponent['beforesorting'];
  /** Row order change started.
Use e.preventDefault() to prevent rgRow order change.
Use e.text = 'new name' to change item name on start. */
  rowdragstart!: IRevoGridComponent['rowdragstart'];
  /** On header click. */
  headerclick!: IRevoGridComponent['headerclick'];
  /** Before cell focus changed.
Use e.preventDefault() to prevent cell focus change. */
  beforecellfocus!: IRevoGridComponent['beforecellfocus'];
  /** Before grid focus lost happened.
Use e.preventDefault() to prevent cell focus change. */
  beforefocuslost!: IRevoGridComponent['beforefocuslost'];
  /** Before data apply.
You can override data source here */
  beforesourceset!: IRevoGridComponent['beforesourceset'];
  /** After rows updated */
  aftersourceset!: IRevoGridComponent['aftersourceset'];
  /** Before column update */
  beforecolumnsset!: IRevoGridComponent['beforecolumnsset'];
  /** Before column applied but after column set gathered and viewport updated */
  beforecolumnapplied!: IRevoGridComponent['beforecolumnapplied'];
  /** Column updated */
  aftercolumnsset!: IRevoGridComponent['aftercolumnsset'];
  /** Before filter applied to data source
Use e.preventDefault() to prevent cell focus change
Update @collection if you wish to change filters */
  beforefilterapply!: IRevoGridComponent['beforefilterapply'];
  /** Before filter trimmed values
Use e.preventDefault() to prevent value trimming and filter apply
Update @collection if you wish to change filters
Update @itemsToFilter if you wish to filter indexes of trimming */
  beforefiltertrimmed!: IRevoGridComponent['beforefiltertrimmed'];
  /** Before trimmed values
Use e.preventDefault() to prevent value trimming
Update @trimmed if you wish to filter indexes of trimming */
  beforetrimmed!: IRevoGridComponent['beforetrimmed'];
  /** Notify trimmed applied */
  aftertrimmed!: IRevoGridComponent['aftertrimmed'];
  /** Triggered when view port scrolled */
  viewportscroll!: IRevoGridComponent['viewportscroll'];
  /** Before export
Use e.preventDefault() to prevent export
Replace data in Event in case you want to modify it in export */
  beforeexport!: IRevoGridComponent['beforeexport'];
  /** Before edit started
Use e.preventDefault() to prevent edit */
  beforeeditstart!: IRevoGridComponent['beforeeditstart'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['beforeedit', 'beforerangeedit', 'afteredit', 'beforeautofill', 'beforeaange', 'roworderchanged', 'beforesourcesortingapply', 'beforesortingapply', 'beforesorting', 'rowdragstart', 'headerclick', 'beforecellfocus', 'beforefocuslost', 'beforesourceset', 'aftersourceset', 'beforecolumnsset', 'beforecolumnapplied', 'aftercolumnsset', 'beforefilterapply', 'beforefiltertrimmed', 'beforetrimmed', 'aftertrimmed', 'viewportscroll', 'beforeexport', 'beforeeditstart']);
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
  outputs: ['initialHeaderClick', 'headerResize', 'headerdblClick']
})
export class RevogrHeader {
  /**  */
  initialHeaderClick!: IRevogrHeaderComponent['initialHeaderClick'];
  /**  */
  headerResize!: IRevogrHeaderComponent['headerresize'];
  /**  */
  headerdblClick!: IRevogrHeaderComponent['headerdblClick'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['initialHeaderClick', 'headerResize', 'headerdblClick']);
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
  inputs: ['canDrag', 'colData', 'dataStore', 'dimensionCol', 'dimensionRow', 'editors', 'lastCell', 'range', 'readonly', 'selectionStore', 'useClipboard']
})
@Component({
  selector: 'revogr-overlay-selection',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['canDrag', 'colData', 'dataStore', 'dimensionCol', 'dimensionRow', 'editors', 'lastCell', 'range', 'readonly', 'selectionStore', 'useClipboard'],
  outputs: ['internalCopy', 'internalPaste', 'internalCellEdit', 'internalFocusCell', 'setEdit', 'setRange', 'setTempRange', 'focusCell', 'internalSelectionChanged', 'internalRangeDataApply']
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
  /** Selection range changed */
  internalSelectionChanged!: IOverlaySelection['internalSelectionChanged'];
  /** Range data apply */
  internalRangeDataApply!: IOverlaySelection['internalRangeDataApply'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['internalCopy', 'internalPaste', 'internalCellEdit', 'internalFocusCell', 'setEdit', 'setRange', 'setTempRange', 'focusCell', 'internalSelectionChanged', 'internalRangeDataApply']);
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
  outputs: ['scrollViewport', 'resizeViewport', 'scrollchange']
})
export class RevogrViewportScroll {
  /**  */
  scrollViewport!: IRevogrViewportScroll['scrollViewport'];
  /**  */
  resizeViewport!: IRevogrViewportScroll['resizeViewport'];
  /**  */
  scrollchange!: IRevogrViewportScroll['scrollchange'];
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['scrollViewport', 'resizeViewport', 'scrollchange']);
  }
}
