import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ice',
  templateUrl: './ice.component.html',
  styleUrls: ['./ice.component.css']
})

export class IceComponent implements OnInit {
  constructor(public router: Router) { }

  ngOnInit() {
    AOS.init();
  }

  scrollToElement($element): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }


  // wait for animation to complete before navigating to route...
  onClick(key: string) {
    this.router.navigate([key]);
  }
}


