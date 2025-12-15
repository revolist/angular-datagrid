import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { GridRouteComponent } from './grid-route.component';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([
      { 
        path: 'grid', 
        component: GridRouteComponent,
        // Removed resolver - using isReady flag in component instead
      },
      { path: '', redirectTo: '/grid', pathMatch: 'full' },
    ]),
  ],
};
