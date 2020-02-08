import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { FlexBoxComponent } from './practice/flex-box/flex-box.component';
import { BasicHighlightAttributeDirective } from './practice/angular/directives/basic-highligh-attribute.directive';
import { BetterHighlightAttributeDirective } from './practice/angular/directives/better-highlight-attribute.directive';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    FlexBoxComponent,
    BasicHighlightAttributeDirective,
    BetterHighlightAttributeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
