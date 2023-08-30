import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaCurricularInteractivoComponent } from './mapa-curricular-interactivo/mapa-curricular-interactivo.component';
import { InfoRelevanteComponent } from './info-relevante/info-relevante.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomeComponent } from './home/home.component';
import { UniYCarreraComponent } from './info-relevante/uni-y-carrera/uni-y-carrera.component';
import { DoYDontComponent } from './info-relevante/do-y-dont/do-y-dont.component';
import { IntershipsJobsComponent } from './info-relevante/interships-jobs/interships-jobs.component';
import { InfoUniComponent } from './info-relevante/info-uni/info-uni.component';
import { InfoIsiComponent } from './info-relevante/info-isi/info-isi.component';



@NgModule({
  declarations: [
    MapaCurricularInteractivoComponent,
    InfoRelevanteComponent,
    GaleriaComponent,
    HomeComponent,
    UniYCarreraComponent,
    DoYDontComponent,
    IntershipsJobsComponent,
    InfoUniComponent,
    InfoIsiComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
