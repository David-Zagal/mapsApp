import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
	selector: 'maps-zoom-range-page',
	templateUrl: './zoom-range-page.component.html',
	styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

	@ViewChild ('map') divMap?: ElementRef;

	public map?: Map;
	public currentLngLat: LngLat = new LngLat (-3.622429892405137, 40.39978734687395);
	public zoom: number = 10;

	ngAfterViewInit (): void {
		if (!this.divMap) return; // throw 'El elemento HTML no fue encontrado';

		this.map = new Map ({
			container: this.divMap.nativeElement, // 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
			center: this.currentLngLat, // starting position [lng, lat]
			zoom: this.zoom, // starting zoom
		});
		this.mapListeners ();
	}

	ngOnDestroy (): void {
		// this.map?.off ('move', () => {});
		this.map?.remove ();
	}

	mapListeners (): void {
		if (!this.map) throw 'Mapa no inicializado';

		this.map.on ('zoom', (ev) => {
			// this.zoom = this.map!.getZoom ();
			this.zoom = ev.target.getZoom ();
		});

		this.map.on ('zoomend', (ev) => {
			if (this.map!.getZoom () < 18) return;
			this.map!.zoomTo (18);
		});

		this.map.on ('move', () => {
			this.currentLngLat = this.map!.getCenter ();
			// const { lng, lat } = this.currentLngLat;
		});
	}

	zoomIn (): void {
		if (!this.map) return;
		this.map.zoomIn ();
	}

	zoomOut (): void {
		if (!this.map) return;
		this.map.zoomOut ();
	}

	zoomChanged (value: string): void {
		if (!this.map) return;
		this.zoom = Number (value);
		this.map.zoomTo (this.zoom);
	}
}