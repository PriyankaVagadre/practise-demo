import { Component, OnInit,ElementRef ,ViewChild ,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-read-qr-codes',
  templateUrl: './read-qr-codes.component.html',
  styleUrls: ['./read-qr-codes.component.scss']
})
export class ReadQRCodesComponent implements OnInit {
  elementType = 'url';
  value = '../../assets/qr.png'; //your path
  @ViewChild('result') resultElement: ElementRef;
  showQRCode : boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  render(e){
    console.log(e.result);
    let element :Element = this.renderer.createElement('p');
    element.innerHTML = e.result;
    this.renderElement(element);    
  }

  renderElement(element){
      for (let node of this.resultElement.nativeElement.childNodes) {
              this.renderer.removeChild(this.resultElement.nativeElement, node);
      }            
      this.renderer.appendChild(this.resultElement.nativeElement, element);
  }

}
