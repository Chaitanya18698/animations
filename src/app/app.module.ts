import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThreeDRotateComponent } from './three-d-rotate/three-d-rotate.component';
import { GradientShowEffectComponent } from './gradient-show-effect/gradient-show-effect.component';
import { PulseEffectComponent } from './pulse-effect/pulse-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeDRotateComponent,
    GradientShowEffectComponent,
    PulseEffectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
