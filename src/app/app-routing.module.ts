import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './layout/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  },
  {
    path: 'view',
    loadChildren: () => import('@modules/view-books/view-books.module').then(m => m.ViewBooksModule),
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('@modules/edit-book/edit-book.module').then(m => m.EditBookModule),
  },
  {
    path: 'add',
    loadChildren: () => import('@modules/add-book/add-book.module').then(m => m.AddBookModule),
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
