import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";

@Component({
  selector: "app-view-child-practice",
  templateUrl: "./view-child-practice.component.html",
  styleUrls: ["./view-child-practice.component.scss"],
})
export class ViewChildPracticeComponent implements OnInit, AfterViewInit {
  @ViewChild("mainDiv") public mainDiv: ElementRef;

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.mainDiv.nativeElement.focus();
    console.log(this.mainDiv);
  }
}
