import { Component, ViewChild } from '@angular/core';
import { IconRefinanceComponent } from './icon-refinance/icon-refinance.component';
import { IconPurchaseComponent } from './icon-purchase/icon-purchase.component';
import { IconEquityComponent } from './icon-equity/icon-equity.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	@ViewChild('refiIcon', { static: false }) refiIcon: IconRefinanceComponent;
	@ViewChild('purchaseIcon', { static: false })
	purchaseIcon: IconPurchaseComponent;
	@ViewChild('equityIcon', { static: false }) equityIcon: IconEquityComponent;

	playRefiAnimation() {
		this.refiIcon.play();
	}

	playPurchaseAnimation() {
		this.purchaseIcon.play();
	}

	playEquityAnimation() {
		this.equityIcon.play();
	}

	resetAll() {
		this.refiIcon.reset();
		this.purchaseIcon.reset();
		this.equityIcon.reset();
	}
}
