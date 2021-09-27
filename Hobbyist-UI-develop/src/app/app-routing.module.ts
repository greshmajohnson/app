import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { CreateArticleComponent } from './pages/create-article/create-article.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyArticlesComponent } from './pages/my-articles/my-articles.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'create-article',
    component: CreateArticleComponent,
    canActivate: [AuthGuard],
    data: {
      role_check: true,
      role_required: 'artist',
    },
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [AuthGuard],
    data: {
      role_check: true,
      role_required: 'admin',
    },
  },
  {
    path: 'my-articles',
    component: MyArticlesComponent,
    canActivate: [AuthGuard],
    data: {
      role_check: true,
      role_required: 'artist',
    },
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
