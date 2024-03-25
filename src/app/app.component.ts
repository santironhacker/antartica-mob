import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'antartica-mob';
	sidebarVisible = false;

	onNavClicked(): void {
		console.log('heo')
		this.sidebarVisible = !this.sidebarVisible;
	}
}
