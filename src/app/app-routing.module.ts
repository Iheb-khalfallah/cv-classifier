import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersideComponent } from './component/userside/userside.component';
import { AdminsideComponent } from './component/adminside/adminside.component';
import { ComponentComponent } from './component/component.component';

const routes: Routes = [
  {
    path: 'component', component: ComponentComponent, children: [
      { path: 'userside', component: UsersideComponent },
      { path: 'adminside', component: AdminsideComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
