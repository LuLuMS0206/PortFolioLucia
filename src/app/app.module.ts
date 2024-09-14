import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar.component';
import { AboutMeComponent } from './views/aboutMe.component';
import { ProjectsComponent } from './views/projects.component';
import { SkillsComponent } from './views/skills.component';
import { ContactComponent } from './views/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutMeComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
