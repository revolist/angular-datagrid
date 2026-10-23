import { inject, Injector, type Type } from '@angular/core';
import { Template } from './renderer';

/** Capture the injector once and reuse the existing framework template factory. */
export function useTemplates(injector = inject(Injector)) {
  return {
    template<C>(component: Type<any>, options?: Parameters<typeof Template<C>>[3]) {
      return Template<C>(component, undefined, injector, {
        ...options, props: options?.props ?? ((context: C) => ({ context })),
      });
    },
  };
}
export type AngularTemplateOwner = ReturnType<typeof useTemplates>;
