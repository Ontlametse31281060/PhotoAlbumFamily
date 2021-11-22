import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsModule } from './Albums/albums.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenav, MatSidenavModule} from "@angular/material/sidenav";
import { ToolbarComponent} from "./Shared/Toolbar/Toolbar.Component";
import { MatListModule} from "@angular/material/list";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlbumsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenav,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
