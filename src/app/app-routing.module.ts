import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShipListComponent } from './ship-list/ship-list.component';
import { AppComponent } from './app.component';

export const appRoutes: Routes = [
  { path: '*', redirectTo: '/', pathMatch: 'full' },
  { path: 'ship-list', component: ShipListComponent}

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
