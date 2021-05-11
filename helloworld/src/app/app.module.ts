import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { TestComponent } from './main/test/test.component'
import { Comp2Component } from './main/comp2/comp2.component'
import { ParentComponent } from './main/parent/parent.component'
import { ChildComponent } from './main/parent/child/child.component'
import { ServiciosComponent } from './main/servicios/servicios.component'
import { MainComponent } from './main/main.component'
import { PersonasService } from './personas.service'

@NgModule({
    declarations: [
        AppComponent,
        TestComponent,
        Comp2Component,
        ParentComponent,
        ChildComponent,
        ServiciosComponent,
        MainComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [PersonasService],
    bootstrap: [AppComponent],
})
export class AppModule {}
