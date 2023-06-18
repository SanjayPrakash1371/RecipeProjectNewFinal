import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoComponent } from './favo/favo.component';
import { ReciepeDetailsComponent } from './reciepe-details/reciepe-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddComponent } from './add/add.component';
import { EditreciepeComponent } from './editreciepe/editreciepe.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'favo', component: FavoComponent },
  { path: 'recipe/:id', component: ReciepeDetailsComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditreciepeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
