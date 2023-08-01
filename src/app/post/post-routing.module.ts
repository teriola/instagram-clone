import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: '',
    }
  // {
  //   path: 'themes',
  //   children: [
  //     {
  //       path: '',
  //       pathMatch: 'full',
  //       component: MainComponent,
  //     },
  //     {
  //       path: ':themeId',
  //       component: CurrentThemeComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'add-theme',
  //   component: NewThemeComponent,
  //   canActivate: [AuthActivate],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
