import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCodesComponent } from './components/add-codes/add-codes.component';

const routes: Routes = [{
  path: "articles",
  component: AddCodesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
