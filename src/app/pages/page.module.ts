import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../modules/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../nav/header/header.component';
import { MainLayoutComponent } from './../layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    AdminHomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, MaterialModule],
})
export class PageModule {}
