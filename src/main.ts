import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { BindingModule } from './app/binding/binding.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
