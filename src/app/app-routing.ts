import { Routes } from '@angular/router';
import {ProfileStudentComponent} from './views/profile/profile-student/profile-student.component';

/* import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard'; */

export const rootRouterConfig: Routes = [
  {  // Ruta por defecto:
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: './views/signin/signin.module#SigninModule',
    data: { title: 'Signin' }
  },
  {
    path: 'forgot-password',
    loadChildren:
      './views/forgot-password/forgot-password.module#ForgotPasswordModule',
    data: { title: 'Forgot Password' }
  },
  {
    path: 'signup',
    loadChildren: './views/signup/signup.module#SignupModule',
    data: { title: 'Signup' }
  },
    {
        path: 'user',
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
                data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
            },
            {
                path: 'favorites',
                loadChildren: './views/favorites/favorites.module#FavoritesModule',
                data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
            },
            {
                path: 'profile',
                loadChildren: './views/profile/profile.module#ProfileModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/datos-personales-form',
                loadChildren: './views/profile/profile-student/datos-personales-form/datos-personales-form.module#DatosPersonalesFormModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/exper-laboral-form',
                loadChildren: './views/profile/profile-student/exper-laboral-form/exper-laboral-form.module#ExperLaboralFormModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/exper-laboral-tabla',
                loadChildren: './views/profile/profile-student/exper-laboral-tabla/exper-laboral-tabla.module#ExperLaboralTablaModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/formac-academica-form/:tipo/:index',
                loadChildren: './views/profile/profile-student/formac-academica-form/formac-academica-form.module#FormacAcademicaFormModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/formac-academica-form-nuevo',
                loadChildren: './views/profile/profile-student/formac-academica-form/formac-academica-form.module#FormacAcademicaFormModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/formac-academica-tabla',
                loadChildren: './views/profile/profile-student/formac-academica-tabla/formac-academica-tabla.module#FormacAcademicaTablaModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/idiomas-form/:index',
                loadChildren: './views/profile/profile-student/idiomas-form/idiomas-form.module#IdiomasFormModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/idiomas-form-nuevo',
                loadChildren: './views/profile/profile-student/idiomas-form/idiomas-form.module#IdiomasFormModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'profile/profile-student/idiomas-tabla',
                loadChildren: './views/profile/profile-student/idiomas-tabla/idiomas-tabla.module#IdiomasTablaModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'offers',
                loadChildren: './views/offers/offers.module#OffersModule',
                data: { title: 'Offers', breadcrumb: 'Offers' }
            },
            {
                path: 'offers/detalle/:id',
                loadChildren: './views/offers/job-offers-student-detalle/job-offers-student-detalle.module#JobOffersStudentDetalleModule',
                data: { title: 'Offers', breadcrumb: 'Offers' }
            }
        ]
    },

  {
    path: 'admin',
    /*  component: AdminLayoutComponent, */
    /* canActivate: [AuthGuard], */
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
      },
      {
        path: 'favorites',
        loadChildren: './views/favorites/favorites.module#FavoritesModule',
        data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
      },
      {
        path: 'profile',
        loadChildren: './views/profile/profile.module#ProfileModule',
        data: { title: 'Material', breadcrumb: 'MATERIAL' }
      },
      {
        path: 'offers',
        loadChildren: './views/offers/offers.module#OffersModule',
        data: { title: 'Offers', breadcrumb: 'Offers' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }
];
