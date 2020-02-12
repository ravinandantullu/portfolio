import { Component, OnInit, Renderer, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-follow-eyes',
  templateUrl: './follow-eyes.component.html',
  styleUrls: ['./follow-eyes.component.scss']
})
export class FollowEyesComponent implements OnInit, AfterViewInit {
  @ViewChild('ball') ball;
  constructor(private renderer: Renderer) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log(this.ball.nativeElement);
    // this.ball.nativeElement.style.backgroundColor = 'red';
  }

  @HostListener('mouseup', ['$event']) onMouseMoved(event: any) {
    let x = (event.clientX * 100 / window.innerWidth) + '%';
    let y = (event.clientY * 100 / window.innerHeight) + '%';
    // console.log(x, y);
    this.renderer.setElementStyle(this.ball.nativeElement, 'backgroundColor', 'red');
  }

}
