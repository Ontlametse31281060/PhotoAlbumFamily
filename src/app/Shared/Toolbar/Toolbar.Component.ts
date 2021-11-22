import {Component, EventEmitter, OnInit, Output} from "@angular/core";

@Component({
  selector: 'app-toolbar',
  templateUrl: './Toolbar.Component.html',
  styleUrls: ['./Toolbar.Component.css']
})
export class ToolbarComponent implements OnInit{
  @Output()
  navToggle = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  toggleNav() {
    this.navToggle.emit();

  }
}
