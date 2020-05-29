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
    { title: 'Sale', description: 'I called existing clients and sold them new websites.' },
    {
      title: 'Research', description: 'I carried out client interviews and analysed competitors websites.'
    },
    {
      title: 'Design', description: 'I planned out the site-map, imagery and colours for the website.'
    },
    {
      title: 'Build', description: 'I built the website over a few days, using the DotGO system.'
    },
    {
      title: 'Evaluate', description: 'I revealed the website and made any requested amendments.'
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


