import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from '@env/environment';
import 'hammerjs';

import {AppModule} from '@app/app.module';
import pdfjsLib from 'pdfjs-dist';
pdfjsLib.PDFJS.workerSrc = 'pdf.worker.js';

if (environment.production) {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
