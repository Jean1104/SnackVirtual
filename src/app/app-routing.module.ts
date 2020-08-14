import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { NologinGuard } from './guards/nologin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./appstart/induccion/induccion.module').then( m => m.InduccionPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'welcome',
    loadChildren: () => import('./appstart/welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./appstart/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./appstart/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NologinGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./apphome/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./apphome/favoritos/favoritos.module').then( m => m.FavoritosPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'carrito',
    loadChildren: () => import('./apphome/carrito/carrito.module').then( m => m.CarritoPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./apphome/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
