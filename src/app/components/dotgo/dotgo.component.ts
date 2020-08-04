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

  iconRow = [
    { title: 'Sale', description: 'Called existing clients and sold them new websites.' },
    {
      title: 'Research', description: 'Carried out client interviews & analysed competitors.'
    },
    {
      title: 'Design', description: 'Planned out the site-map, images and colours.'
    },
    {
      title: 'Build', description: 'Built the site over a few days using the DotGO system.'
    },
    {
      title: 'Evaluate', description: 'Revealed website & made any requested changes.'
    }];

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


