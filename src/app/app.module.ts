import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormPracticeModule } from './modules/form-practice/form-practice.module';

import { AppComponent } from './app.component';
import { FlexBoxComponent } from './practice/flex-box/flex-box.component';
import { BasicHighlightAttributeDirective } from './practice/angular/directives/basic-highligh-attribute.directive';
import { BetterHighlightAttributeDirective } from './practice/angular/directives/better-highlight-attribute.directive';
import { FollowEyesComponent } from './components/follow-eyes/follow-eyes.component';

import { ResumeModule } from './resume/resume.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoModule } from './components/todo/todo.module';
import { HtmlCssModule } from './modules/html-css/html-css.module';
import { ViewChildPracticeComponent } from './practice/angular/view-child/view-child-practice/view-child-practice.component';
import { NameAnimateComponent } from './components/name-animate/name-animate.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexBoxComponent,
    BasicHighlightAttributeDirective,
    BetterHighlightAttributeDirective,
    FollowEyesComponent,
    ViewChildPracticeComponent,
    NameAnimateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormPracticeModule,
    ResumeModule,
    TodoModule,
    HtmlCssModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
