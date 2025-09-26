import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app.component';
import { HeaderComponent } from './header/header.component';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
bootstrapApplication(HeaderComponent, appConfig).catch((err) => console.error(err));
