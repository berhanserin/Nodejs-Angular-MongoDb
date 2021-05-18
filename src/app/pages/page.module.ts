import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainLayoutComponent } from './../layouts/main-layout/main-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../modules/material.module';
import { HeaderComponent } from "../nav/header/header.component";
@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MaterialModule
  ]
})
export class PageModule { }
