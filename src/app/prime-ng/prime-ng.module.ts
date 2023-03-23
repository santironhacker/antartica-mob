import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';

const primeNgModules = [ButtonModule];

@NgModule({
    imports: [primeNgModules],
    exports: [primeNgModules],
})
export class AppModule {}