import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BootcampComponent } from './componentes/bootcamp/bootcamp.component';
import { BootcampListComponent } from './componentes/bootcamp-list/bootcamp-list.component';
import { BootcampMantComponent } from './componentes/bootcamp-mant/bootcamp-mant.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'bootcamp'},
  { path: 'bootcamp', component: BootcampComponent }
  //{ path: 'lista', component: BootcampListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PrivateRoutingModule {}
