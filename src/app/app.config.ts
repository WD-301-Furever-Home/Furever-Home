import { ApplicationConfig } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideHttpClient } from "@angular/common/http";
import { provideRouter } from "@angular/router";
import { importProvidersFrom } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    provideRouter([]), 
    importProvidersFrom(
      MatToolbarModule,
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatIconModule,
      CarouselModule,
    ), provideAnimationsAsync()
  ]
};
