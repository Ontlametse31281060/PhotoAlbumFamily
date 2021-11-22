import { CommonModule} from "@angular/common";
import { MatToolbarModule} from "@angular/material/toolbar";
import { MatButtonModule} from "@angular/material/button";
import {NgModule} from "@angular/core";
import {MatIconModule} from "@angular/material/icon";
import { ToolbarComponent} from


@NgModule({
  imports: [CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [ToolbarComponent]
  exports: [ToolbarComponent]
})

export class SharedModule{ }
