import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './pages/page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, PageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
