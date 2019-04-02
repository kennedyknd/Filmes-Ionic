import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'detalhes/:id', loadChildren: './detalhes/detalhes.module#DetalhesPageModule' },
  { path: 'filme/:id', loadChildren: './filme/filme.module#FilmePageModule' },
  { path: 'atores/:id', loadChildren: './atores/atores.module#AtoresPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
