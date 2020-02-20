import { Component, OnInit, Renderer, ViewChild, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-follow-eyes',
  templateUrl: './follow-eyes.component.html',
  styleUrls: ['./follow-eyes.component.scss']
})
export class FollowEyesComponent implements OnInit, AfterViewInit {
  @ViewChild('leftEye') leftEye: any;
  @ViewChild('rightEye') rightEye: any;

  constructor(private renderer: Renderer) { }

  ngOnInit() { }

  ngAfterViewInit() { }

  @HostListener('mousemove', ['$event']) onMouseMoved(event: any) {
    const x = (event.clientX * 100 / window.innerWidth) + '%';
    const y = (event.clientY * 100 / window.innerHeight) + '%';
    console.log(this.leftEye);
    this.renderer.setElementStyle(this.leftEye.nativeElement, 'left', x);
    this.renderer.setElementStyle(this.leftEye.nativeElement, 'top', y);
    this.renderer.setElementStyle(this.leftEye.nativeElement, 'transform', `translate(-${x},-${y})`);
    this.renderer.setElementStyle(this.rightEye.nativeElement, 'left', x);
    this.renderer.setElementStyle(this.rightEye.nativeElement, 'top', y);
    this.renderer.setElementStyle(this.rightEye.nativeElement, 'transform', `translate(-${x},-${y})`);
  }

}
