import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})

export class DesignComponent implements OnInit {
  constructor(public router: Router) { }

  moreClicked = false;
  isLoaded = false;


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

  // to do - move spinner to shared component
  onLoad() {
    this.isLoaded = true;
  }
}


