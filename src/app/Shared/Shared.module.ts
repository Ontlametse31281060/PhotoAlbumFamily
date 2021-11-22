import { CommonModule} from "@angular/common";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  ],
  declarations: [ToolbarComponent, MarginIconComponent, UploadDirective],
  exports: [ToolbarComponent, MarginIconComponent, UploadDirective],
  providers: [FileStorageService, FolderService, FileService]
})
export class SharedModule { }
