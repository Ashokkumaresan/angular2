import { Directive,OnInit,ElementRef } from '@angular/core';

@Directive({
	selector:'[appBasicHightLight]'
})
export class basichightlightdirective implements OnInit {
	constructor(private elementrf:ElementRef){
	}

ngOnInit(){
	this.elementrf.nativeElement.style.backgroundColor='green';
}
}