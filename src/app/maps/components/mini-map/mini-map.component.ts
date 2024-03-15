import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, Marker } from 'mapbox-gl';

@Component({
	selector: 'maps-mini-map',
	templateUrl: './mini-map.component.html',
	styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent implements AfterViewInit {

	@Input() lngLat?: [number, number];
	@Input() color?: string;
	@ViewChild ('map') divMap?: ElementRef;

	public zoom: number = 15

	ngAfterViewInit (): void {
		if (!this.divMap?.nativeElement) throw 'MapDiv not found';
		if (!this.lngLat) throw 'LngLat can`t be null';

		const map = new Map ({
			container: this.divMap.nativeElement,
			style: 'mapbox://styles/mapbox/streets-v12',
			center: this.lngLat,
			zoom: this.zoom,
			interactive: false,
		});

		new Marker ({ color: this.color }).setLngLat (this.lngLat).addTo (map);
	}
}