import { ApplicationRef, createComponent, EnvironmentInjector, type ComponentRef, type Injector, type Type } from '@angular/core';

/** Shared mounting primitive for legacy cells and component content templates. */
export function mountAngularComponent<T>(component: Type<T>, injector: Injector): ComponentRef<T> {
  const ref = createComponent(component, {
    environmentInjector: injector.get(EnvironmentInjector),
    elementInjector: injector,
  });
  injector.get(ApplicationRef).attachView(ref.hostView);
  return ref;
}
