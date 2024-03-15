import { Component } from '@angular/core';
import { House } from './interfaces/house.interface';

@Component({
	selector: 'maps-properties-page',
	templateUrl: './properties-page.component.html',
	styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent {

	public houses: House[] = [
		{
			title:			'Casa residencial, Canadá',
			description:	'Bella propiedad en Katana, Canadá',
			color:			'#xxxxxx'.replace (/x/g, y => (Math.random ()*16|0).toString (16)),
			lngLat:			[-75.92722289474008, 45.280015511264466],
		},
		{
			title:			'Casa de playa, México',
			description:	'Hermosa casa de playa en Acapulco, México',
			color:			'#xxxxxx'.replace (/x/g, y => (Math.random ()*16|0).toString (16)),
			lngLat:			[-99.91287720907991, 16.828940930185748],
		},
		{
			title:			'Apartamento, Argentina',
			description:	'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
			color:			'#xxxxxx'.replace (/x/g, y => (Math.random ()*16|0).toString (16)),
			lngLat:			[-58.430166677283445, -34.57150108832866 ],
		},
		{
			title:			'Local comercial, España',
			description:	'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
			color:			'#xxxxxx'.replace (/x/g, y => (Math.random ()*16|0).toString (16)),
			lngLat:			[-3.7112735618380177, 40.42567285425766 ],
		},
	];
}