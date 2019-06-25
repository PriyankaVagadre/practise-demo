import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-code-generator',
  templateUrl: './qr-code-generator.component.html',
  styleUrls: ['./qr-code-generator.component.scss']
})
export class QRCodeGeneratorComponent implements OnInit {
  elementType : 'url' | 'canvas' | 'img' = 'url';
  value : string = 'PriyankaVagadre';  

  constructor() { }

  ngOnInit() {
  }

}
