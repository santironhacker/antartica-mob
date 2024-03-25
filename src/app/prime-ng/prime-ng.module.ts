import { NgModule } from "@angular/core";
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

const primeNgModules = [ButtonModule, SidebarModule];

@NgModule({
    imports: [primeNgModules],
    exports: [primeNgModules],
})
export class PrimeNgModules {}