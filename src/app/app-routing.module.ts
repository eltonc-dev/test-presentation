import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShipListComponent} from './ship-list/ship-list.component';
import {IncreaseComponent} from './increase/increase.component';
import {ComcatComponent} from './comcat/comcat.component';

export const appRoutes: Routes = [
  { path: '*', redirectTo: '/', pathMatch: 'full' },
  { path: 'increase-component', component: IncreaseComponent},
  { path: 'ship-list', component: ShipListComponent},
  { path: 'concat-component', component: ComcatComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      paramsInheritanceStrategy: 'always',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
