import { NgModule } from '@angular/core';
import { Routes} from "@angular/router";
import { CommonModule} from "@angular/common";
import { RouterModule} from "@angular/router";
import { AlbumsListComponent} from "./Albums/AlbumsList"

const routes: Routes = [
  {path: 'Albums', component: AlbumsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
