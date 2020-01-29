import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { FlexBoxComponent } from './practice/flex-box/flex-box.component';
import { AbsoluteRelativeComponent } from './practice/designPatterns/practice/absolute-relative/absolute-relative.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    FlexBoxComponent,
    AbsoluteRelativeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
