import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { NoAccountGuard } from './core/guards/no-account.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'account/setup',
    loadChildren: () =>
      import('./features/account/account-setup/account-setup.module').then(
        (m) => m.AccountSetupModule
      ),
    canActivate: [AuthGuard, NoAccountGuard],
  },
  {
    path: 'problems',
    loadChildren: () =>
      import('./features/problems/problems.module').then(
        (m) => m.ProblemsModule
      ),
  },
  {
    path: 'problem/:problemId',
    loadChildren: () =>
      import('./features/problem/problem.module').then((m) => m.ProblemModule),
  },
  {
    path: 'create/problem',
    loadChildren: () =>
      import('./features/create-problem/create-problem.module').then(
        (m) => m.CreateProblemModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./features/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'protected',
    loadChildren: () =>
      import('./features/protected/protected.module').then(
        (m) => m.ProtectedModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./features/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'callback',
    loadChildren: () =>
      import('./features/callback/callback.module').then(
        (m) => m.CallbackModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
