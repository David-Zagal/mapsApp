import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
	selector: 'maps-full-sreen-page',
	templateUrl: './full-sreen-page.component.html',
	styleUrls: ['./full-sreen-page.component.css']
})
export class FullSreenPageComponent implements AfterViewInit {

	@ViewChild ('map') divMap?: ElementRef;

	ngAfterViewInit (): void {
		if (!this.divMap) return; // throw 'El elemento HTML no fue encontrado';
		const map = new Map ({
			container: this.divMap.nativeElement, // 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
			center: [-74.5, 40], // starting position [lng, lat]
			zoom: 9, // starting zoom
		});
	}
}