import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
	navClicked: EventEmitter<void> = new EventEmitter();

	onNavClicked(): void {
		this.navClicked.emit();
	}
}
