import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { IconRefinanceComponent } from './icon-refinance/icon-refinance.component';
import { IconPurchaseComponent } from './icon-purchase/icon-purchase.component';
import { IconEquityComponent } from './icon-equity/icon-equity.component';
import { LottieModule } from 'ngx-lottie';
//import player from "lottie-web";

export function playerFactory() {
	//return player;
	return import('lottie-web');
}

@NgModule({
	declarations: [
		AppComponent,
		IconRefinanceComponent,
		IconPurchaseComponent,
		IconEquityComponent
	],
	imports: [
		BrowserModule,
		LottieModule.forRoot({ player: playerFactory, useCache: true })
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
