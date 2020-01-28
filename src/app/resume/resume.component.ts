import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  headerDetails = {
    name: 'Ravinandan Tulluri',
    email: 'tulluri.ravinandan@gmail.com',
    likidlnUrl: 'linkedin.com/in/ravinandan-tulluri',
    phoneNumber: '+1(216)-482-7446'
  };

  constructor() { }

  ngOnInit() {
  }

}
