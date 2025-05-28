import { Routes } from '@angular/router';
import { DataBindingComponent } from './exercises/data-binding/data-binding.component';
import { PropertyBindingComponent } from './exercises/property-binding/property-binding.component';
import { NgModelComponent } from './exercises/ng-model/ng-model.component';
import { HomeComponent } from './home/home.component';
import { EventBindingComponent } from './exercises/event-binding/event-binding.component';
import { direttiveComunicazioneComponenti } from './exercises/direttive-comunicazione-componenti/direttive-comunicazione-componenti.component';
import { PadreComponent } from './exercises/padre/padre.component';
import { ParametriDemoComponent } from './exercises/parametri-demo/parametri-demo.component';
import { PageFormComponent } from './exercises/page-form-component/page-form-component.component';
import { PageResultComponent } from './exercises/page-result-component/page-result-component.component';
import { ObservableComponent } from './exercises/observable/observable.component';
import { MemoryLeakComponent } from './exercises/observable/memory-leak/memory-leak.component';
import { PadreComponentNgChangesComponent } from './exercises/ngOnChanges/padre-component-ng-changes/padre-component-ng-changes.component';
import { FiglioComponentNgChangesComponent } from './exercises/ngOnChanges/figlio-component-ng-changes/figlio-component-ng-changes.component';
import { DoCheckExampleComponent } from './exercises/do-check-example/do-check-example.component';
import { SubjectBehaviorSubjectComponent } from './exercises/subject-behavior-subject/subject-behavior-subject.component';
import { NgAfterViewInitComponent } from './exercises/ng-after-view-init/ng-after-view-init.component';
import { ToggleWrapperComponent } from './exercises/ng-on-destroy/toggle-wrapper/toggle-wrapper.component';
import { ViewChildChildrenComponent } from './exercises/view-child-children/view-child-children.component';
import { RxjsHttpComponent } from './exercises/rxjs-http/rxjs-http.component';
import { UserAsyncComponent } from './exercises/user-async/user-async.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
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
    component: PadreComponent,
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
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'memory-leak',
    component: MemoryLeakComponent
  },
  {
    path: 'padreNgChanges',
    component: PadreComponentNgChangesComponent
  },
  {
    path: 'figlioNgChange',
    component: FiglioComponentNgChangesComponent
  },
  {
    path: 'ngDoCheck',
    component: DoCheckExampleComponent
  },
  {
    path: 'sbjt&sbjtbvr',
    component: SubjectBehaviorSubjectComponent
  },
  {
    path: 'ngAfterViewInit',
    component: NgAfterViewInitComponent
  },
  {
    path: 'ngOnDestroy',
    component: ToggleWrapperComponent
  },
  {
    path: 'viewChildChildren',
    component: ViewChildChildrenComponent
  },
  {
    path: 'rxjs-http',
    component: RxjsHttpComponent
  },
  {
    path: 'pipe-async',
    component: UserAsyncComponent
  }
];
