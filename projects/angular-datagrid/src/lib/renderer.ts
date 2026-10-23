/**
 * Angular Adapter Function:
 * Handles the rendering and lifecycle of Angular components within StencilJS using updated Angular APIs.
 */
import { Injector, ComponentRef, Type, inject } from '@angular/core';
import { mountAngularComponent } from './component-mount';
import { ColumnDataSchemaModel, ColumnTemplateProp } from '@revolist/revogrid';

export interface AngularElement extends HTMLElement {
  componentRef?: ComponentRef<any>;  // Reference to the Angular component
}

export interface RenderedComponent<T> {
  update: (newProps: T) => void;     // Function to update component with new props
  destroy: () => void;               // Function to destroy the component
}

function updateProps<T extends object>(el: AngularElement, newProps: T, directInputs = false) {
  if (!el.componentRef?.instance) {
    return;
  }
  
  
  if (directInputs) {
    for (const [key, value] of Object.entries(newProps)) el.componentRef.setInput(key, value);
    el.componentRef.changeDetectorRef.detectChanges();
    return;
  }

  // Update both ways to ensure it works with different component implementations
  el.componentRef.instance.props = newProps;
  el.componentRef.setInput('props', newProps);
  
  // Handle ngOnChanges if component implements it
  if (el.componentRef.instance.ngOnChanges) {
    const previousValue = el.componentRef.instance.props;
    const simpleChanges = {
      props: {
        previousValue,
        currentValue: newProps,
        firstChange: previousValue === undefined,
        isFirstChange: () => previousValue === undefined
      }
    };
    el.componentRef.instance.ngOnChanges(simpleChanges);
  }
  
  // Force component to check for updates
  el.componentRef.changeDetectorRef.markForCheck();
  el.componentRef.changeDetectorRef.detectChanges();
}

export function TemplateConstructor<T extends Object>(
  el: AngularElement | null,
  AngularComponent: Type<any>,
  initialProps: T = {} as T,
  injector: Injector,
  lastEl: RenderedComponent<T> | null = null,
  directInputs = false,
): RenderedComponent<T> | null {
  if (!el) {
    lastEl?.destroy?.();  // Destroy last component if element is null
    return null;
  }

  if (!el.componentRef) {
    const componentRef = mountAngularComponent(AngularComponent, injector);
    el.componentRef = componentRef;  // Store the component reference
    if (directInputs) updateProps(el, initialProps, true);
    else {
      componentRef.instance.props = initialProps;
      componentRef.changeDetectorRef.detectChanges();
    }
    el.appendChild(componentRef.location.nativeElement);
  } else if (el.componentRef.instance) {
    updateProps(el, initialProps, directInputs);
  }

  // Function to update component props
  const update = (newProps: T) => updateProps(el, newProps, directInputs);

  // Function to destroy the component
  const destroy = () => {
    el.componentRef?.destroy();
    el.componentRef = undefined;
  };

  return { update, destroy };
}

export const Template = <C = ColumnDataSchemaModel | ColumnTemplateProp>(
  AngularComponent: Type<any>, customProps?: any,
  injector = inject(Injector), options?: { props?: (context: C) => Record<string, any>; key?: (context: C) => string | number },
) => (h: any, p: C, addition?: any) => {
  const props = options?.props ? options.props(p) : { ...customProps, ...p, addition };
  let lastEl: RenderedComponent<any> | null = null;
  return h('span', {
    key: options?.key?.(p) ?? `${(p as any).prop}-${(p as any).rowIndex || 0}`,
    ref: (el: AngularElement | null) => {
      lastEl = TemplateConstructor(el, AngularComponent, props, injector, lastEl, !!options?.props);
    },
  });
};
