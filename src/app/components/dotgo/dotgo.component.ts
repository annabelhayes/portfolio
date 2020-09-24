import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dotgo',
  templateUrl: './dotgo.component.html',
  styleUrls: ['./dotgo.component.css']
})

export class DotGoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    AOS.init();
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  onClick(key: string) {
    this.router.navigate([key]);
  }
}


