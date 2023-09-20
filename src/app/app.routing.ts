import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { MapaCurricularInteractivoComponent } from './components/mapa-curricular-interactivo/mapa-curricular-interactivo.component';
import { DoYDontComponent } from './components/info-relevante/do-y-dont/do-y-dont.component';
import { InfoIsiComponent } from './components/info-relevante/info-isi/info-isi.component';
import { InfoUniComponent } from './components/info-relevante/info-uni/info-uni.component';
import { IntershipsJobsComponent } from './components/info-relevante/interships-jobs/interships-jobs.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  },
  {
    path: 'do-dont',
    component: DoYDontComponent
  },
  {
    path: 'info-isi',
    component: InfoIsiComponent
  },
  {
    path: 'info-uni',
    component: InfoUniComponent
  },
  {
    path: 'inter-jobs',
    component: IntershipsJobsComponent
  },
  {
    path: 'mapa-interactivo',
    component: MapaCurricularInteractivoComponent
  }
]