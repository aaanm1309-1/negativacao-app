import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import {MatButtonModule} from '@angular/material/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NegativarService } from './negativar.service';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [NegativarService],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
