import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {ContactComponent} from "./contact/contact.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {NotFoundComponent} from "./not-found/not-found.component";
// tableau de config
const routes: Routes = [
  // ywalli ycherchi bil prefix -normalment par defaut--w hedhi dima tet7at mloul
  {path:"", redirectTo:"product", pathMatch:'full'},
  {path:"product",component:ProductsComponent,children:[{path:"details",component:ProductDetailsComponent}]},
  // param obligatoire
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"contact",component:ContactComponent},
  // ** maneha kol chy--else-->wildCard w hedhi tet7at mil la5er
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
