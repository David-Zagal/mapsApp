import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiZ2F0b2xvcCIsImEiOiJjbHRwdjl0a3AwcjM4MmlvNnY0eTBpcTMwIn0.oFTSZCM__4QU7zhizBKOnA';

import { MapsRoutingModule } from './maps-routing.module';

import { FullSreenPageComponent } from './pages/full-sreen-page/full-sreen-page.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import { CounterAloneComponent } from './../alone/components/counter-alone/counter-alone.component';
import { SideMenuComponent } from './../alone/components/side-menu/side-menu.component';

@NgModule({
	declarations: [
		FullSreenPageComponent,
		MapsLayoutComponent,
		MarkersPageComponent,
		MiniMapComponent,
		PropertiesPageComponent,
		ZoomRangePageComponent,
	],
	imports: [
		CommonModule,
		CounterAloneComponent,
		MapsRoutingModule,
		SideMenuComponent,
	]
})
export class MapsModule {}