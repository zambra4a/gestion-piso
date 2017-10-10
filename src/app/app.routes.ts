import { RouterModule, Routes } from '@angular/router';

import {TareasComponent} from './components/tareas/tareas.component';
import {CalendarioComponent} from './components/calendario/calendario.component';
import {InquilinosComponent} from './components/inquilinos/inquilinos.component';
import {ComprasComponent} from './components/compras/compras.component';
import {MensajesComponent} from './components/mensajes/mensajes.component';

const app_routes: Routes = [
  { path: '', component: TareasComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'inquilinos', component: InquilinosComponent },
  { path: 'compras', component: ComprasComponent },
  { path: 'mensajes', component: MensajesComponent }
];

export const app_routing = RouterModule.forRoot(app_routes);