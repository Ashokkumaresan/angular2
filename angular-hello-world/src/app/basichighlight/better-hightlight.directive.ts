import { Directive,OnInit,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit{

  constructor(private ele:ElementRef,private render:Renderer2) { }

  ngOnInit(){
  	
  }
  @HostListener('mouseenter') over(eventData:Event){
  	this.render.setStyle(this.ele.nativeElement,'backgroundColor','red');
  }
    @HostListener('mouseleave') leave(eventData:Event){
  	this.render.setStyle(this.ele.nativeElement,'backgroundColor','transparent');
  }
    @HostListener('click') cli(eventData:Event){
  	this.render.setStyle(this.ele.nativeElement,'backgroundColor','yellow');
  }
}
