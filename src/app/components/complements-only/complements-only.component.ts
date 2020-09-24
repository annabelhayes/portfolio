import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Router } from '@angular/router';
@Component({
  selector: 'app-comp-only',
  templateUrl: './complements-only.component.html',
  styleUrls: ['./complements-only.component.css']
})

export class CompOnlyComponent implements OnInit {
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

  OnClickExternal(url: string) {
    window.open(url, 'blank_');
  }
}


