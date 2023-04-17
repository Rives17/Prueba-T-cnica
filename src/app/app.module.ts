import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeneralInfoComponent } from './pages/projects/general-info/general-info.component';
import { ComponentsModule } from "./components/components.module";

@NgModule({
    declarations: [
        AppComponent,
        GeneralInfoComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        PagesModule,
        SharedModule,
        FormsModule,
        ComponentsModule
    ]
})
export class AppModule { }
