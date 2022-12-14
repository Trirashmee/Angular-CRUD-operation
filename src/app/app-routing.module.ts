import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongoComponent } from './mongo/mongo.component';
import { MonproductComponent } from './monproduct/monproduct.component';
import { UpdateempComponent } from './updateemp/updateemp.component';

const routes: Routes = [{
  path:'mongo',component:MongoComponent},
  {path:'monproduct',component:MonproductComponent},
  {path:'updateemp/:id',component:UpdateempComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
