import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSreenPageComponent } from './full-sreen-page.component';

describe ('FullSreenPageComponent', () => {
	let component: FullSreenPageComponent;
	let fixture: ComponentFixture<FullSreenPageComponent>;

	beforeEach (() => {
		TestBed.configureTestingModule ({
			declarations: [FullSreenPageComponent]
		});
		fixture = TestBed.createComponent (FullSreenPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges ();
	});

	it ('should create', () => {
		expect (component).toBeTruthy ();
	});
});