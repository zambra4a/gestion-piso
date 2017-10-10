import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TareasComponent } from './components/tareas/tareas.component';

import { app_routing } from './app.routes';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { InquilinosComponent } from './components/inquilinos/inquilinos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';

@NgModule({
  declarations: [
    AppComponent,
    TareasComponent,
    MenuComponent,
    ToolbarComponent,
    CalendarioComponent,
    InquilinosComponent,
    ComprasComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    app_routing,
    MdButtonModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
