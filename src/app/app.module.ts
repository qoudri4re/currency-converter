import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxSemanticModule } from 'ngx-semantic';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [{ path: '', component: ConverterComponent }];

@NgModule({
  declarations: [AppComponent, ConverterComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    NgxSemanticModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
