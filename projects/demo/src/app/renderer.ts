/**
 * Angular Adapter Function:
 * Handles the rendering and lifecycle of Angular components within StencilJS using updated Angular APIs.
 */
import { Injector, ComponentRef, Type, ApplicationRef, createComponent, EnvironmentInjector } from '@angular/core';
import { ColumnDataSchemaModel } from '@revolist/revogrid';

export interface AngularElement extends HTMLElement {
  componentRef?: ComponentRef<any>;  // Reference to the Angular component
}

export interface RenderedComponent<T> {
  update: (newProps: T) => void;     // Function to update component with new props
  destroy: () => void;               // Function to destroy the component
}

function updateProps<T>(el: AngularElement, newProps: T) {
  if (!el.componentRef?.instance) {
    return;
  }
  el.componentRef.instance.props = newProps;
  el.componentRef.instance.ngOnChanges({
    props: {
      currentValue: newProps,
      previousValue: el.componentRef.instance.props,
      firstChange: false,
      isFirstChange: () => false,
    },
  });
}

export function TemplateConstructor<T extends Object>(
  el: AngularElement | null,
  AngularComponent: Type<any>,
  initialProps: T = {} as T,
  injector: Injector,
  lastEl: RenderedComponent<T> | null = null,
): RenderedComponent<T> | null {
  if (!el) {
    lastEl?.destroy?.();  // Destroy last component if element is null
    return null;
  }

  if (!el.componentRef) {
    const applicationRef = injector.get(ApplicationRef);
    const environmentInjector = injector.get(EnvironmentInjector);
    const componentRef = createComponent(AngularComponent, { environmentInjector });
    applicationRef.attachView(componentRef.hostView);
    componentRef.instance.props = initialProps;
    componentRef.changeDetectorRef.detectChanges();
    el.componentRef = componentRef;  // Store the component reference
    el.appendChild(componentRef.location.nativeElement);
  } else if (el.componentRef.instance) {
    updateProps(el, initialProps);
  }

  // Function to update component props
  const update = (newProps: T) => updateProps(el, newProps);

  // Function to destroy the component
  const destroy = () => {
    el.componentRef?.destroy();
    el.componentRef = undefined;
  };

  return { update, destroy };
}

// Function to create template for Angular component
export const Template = (
  AngularComponent: Type<any>,
  injector: Injector,
  customProps?: any,
) => {
  return (h: any, p: ColumnDataSchemaModel, addition?: any) => {
    const props = customProps ? { ...customProps, ...p } : p;
    props.addition = addition;
    let lastEl: RenderedComponent<any> | null = null;
    return h('span', {
      ref: (el: AngularElement | null) => {
        lastEl = TemplateConstructor(el, AngularComponent, props, injector, lastEl);
      }
    });
  };
};
