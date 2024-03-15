import { PlainMarker } from './interfaces/plain-marker.interface';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';
import { MarkerAndColor } from './interfaces/marker-and-color.interface';

@Component({
	selector: 'maps-markers-page',
	templateUrl: './markers-page.component.html',
	styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit {

	@ViewChild ('map') divMap?: ElementRef;

	public markers: MarkerAndColor[] = [];
	public map?: Map;
	public currentLngLat: LngLat = new LngLat (-3.622429892405137, 40.39978734687395);
	public zoom: number = 13;

	ngAfterViewInit (): void {
		if (!this.divMap) return; // throw 'El elemento HTML no fue encontrado';

		this.map = new Map ({
			container: this.divMap.nativeElement, // 'map', // container ID
			style: 'mapbox://styles/mapbox/streets-v12', // style URL
			center: this.currentLngLat, // starting position [lng, lat]
			zoom: this.zoom, // starting zoom
		});

		this.readFromLocalStorage ();

		// const markerHtml = document.createElement ('div');
		// markerHtml.innerHTML = 'David DC';
		// const marker = new Marker ({
		// 	color: 'red',
		// 	element: markerHtml,
		// },).setLngLat (this.currentLngLat).addTo (this.map);
	}

	createMarker (): void {
		if (!this.map) return;
		const color = '#xxxxxx'.replace (/x/g, y => (Math.random ()*16|0).toString (16));
		const lngLat = this.map.getCenter ();
		this.addMarker (color, lngLat);
	}

	addMarker (color: string, lngLat: LngLat): void {
		if (!this.map) return;
		const marker = new Marker ({ color: color, draggable: true }).setLngLat (lngLat).addTo (this.map);
		this.markers.push ({ color, marker });
		this.saveToLocalStorage ();

		marker.on ('dragend', () => { this.saveToLocalStorage (); });
	}

	deleteMarker (index: number): void {
		this.markers[index].marker.remove ();
		this.markers.splice (index, 1);
	}

	flyTo (marker: Marker): void {
		if (!this.map) return;
		this.map.flyTo ({
			zoom: this.zoom,
			center: marker.getLngLat (),
		});
	}

	saveToLocalStorage (): void {
		const plainMarkers: PlainMarker[] = this.markers.map (({ color, marker }) => {
			return { color, lngLat: marker.getLngLat ().toArray () };
		});
		localStorage.setItem ('plainMarkers', JSON.stringify (plainMarkers));
	}

	readFromLocalStorage (): void {
		const plainMarkersString = localStorage.getItem ('plainMarkers') ?? '[]';
		const plainMarkers: PlainMarker[] = JSON.parse (plainMarkersString); //! OJO!

		plainMarkers.forEach (({ color, lngLat }) => {
			const [lng, lat] = lngLat;
			const coordsLngLat: LngLat = new LngLat (lng, lat);
			this.addMarker (color, coordsLngLat);
		});
	}
}