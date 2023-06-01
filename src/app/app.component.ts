import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assessmentproj';

constructor(
  private matIconRegistry: MatIconRegistry,
  private domSanitizer: DomSanitizer
){
  this.matIconRegistry.addSvgIcon(
    'instagram' ,
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgicons/instagram.svg')
  )
  this.matIconRegistry.addSvgIcon(
    'facebook' ,
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgicons/facebook.svg')
  )
  this.matIconRegistry.addSvgIcon(
    'twitter' ,
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgicons/twitter.svg')
  )
  this.matIconRegistry.addSvgIcon(
    'linkedin' ,
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgicons/linkedin.svg')
  )
  this.matIconRegistry.addSvgIcon(
    'youtube' ,
    this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svgicons/youtube.svg')
  )
}

}
