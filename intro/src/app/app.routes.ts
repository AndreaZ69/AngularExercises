import { Routes } from '@angular/router';
import { DataBindingComponent } from './exercises/data-binding/data-binding.component';
import { PropertyBindingComponent } from './exercises/property-binding/property-binding.component';
import { NgModelComponent } from './exercises/ng-model/ng-model.component';
import { HomeComponent } from './home/home.component';
import { EventBindingComponent } from './exercises/event-binding/event-binding.component';
import { direttiveComunicazioneComponenti } from './exercises/direttive-comunicazione-componenti/direttive-comunicazione-componenti.component';
import { PadreFiglioComponent } from './exercises/padre-figlio/padre-figlio.component';
import { PadreComponent } from './exercises/padre/padre.component';
import { FiglioComponent } from './exercises/figlio/figlio.component';
import { ParametriDemoComponent } from './exercises/parametri-demo/parametri-demo.component';
import { PageFormComponent } from './exercises/page-form-component/page-form-component.component';
import { PageResultComponent } from './exercises/page-result-component/page-result-component.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent // Homepage
  },
  {
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  { path: 'ng-model', 
    component: NgModelComponent 
  },
  { path: 'event-binding', 
    component: EventBindingComponent 
  },
  { path: 'direttive-comunicazione-componenti', 
    component: direttiveComunicazioneComponenti 
  },
  { path: 'esercizi-padre-figlio', 
    component: PadreFiglioComponent,
  },
  { path: 'padre', 
    component: PadreComponent,
  },
  { path: 'figlio', 
    component: FiglioComponent,
  },
  {
    path: 'parametri-demo/:id',
    component: ParametriDemoComponent
  },
  {
    path: 'parametri-demo',
    component: ParametriDemoComponent
  },
  {
    path: 'parametri-form-names',
    component: PageFormComponent
  },
  {
    path: 'parametri-result-names',
    component: PageResultComponent
  },
];
