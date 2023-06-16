import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoComponent } from './favo/favo.component';
import { ReciepeDetailsComponent } from './reciepe-details/reciepe-details.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'favo', component: FavoComponent },
  { path: 'recipe/:id', component: ReciepeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
