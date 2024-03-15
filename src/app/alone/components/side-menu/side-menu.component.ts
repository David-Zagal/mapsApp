import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from './interfaces/menu-item.interface';

@Component({
	selector: 'side-menu',
	standalone: true,
	imports: [CommonModule, RouterModule,],
	templateUrl: './side-menu.component.html',
	styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

	public menuItems: MenuItem[] = [
		{ route: '/maps/fullscreen', name: 'Full Screen' },
		{ route: '/maps/markers', name: 'Markers' },
		{ route: '/maps/houses', name: 'Houses' },
		{ route: '/maps/zoom-range', name: 'Zoom Range' },
		{ route: '/alone', name: 'Alone Range' },
	];
}