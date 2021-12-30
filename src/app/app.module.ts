import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GastosComponent } from './components/gastos/gastos.component';
import { ListarGastoComponent } from './components/gastos/listar-gasto/listar-gasto.component';
import { IngresarGastoComponent } from './components/gastos/ingresar-gasto/ingresar-gasto.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { FormsModule } from '@angular/forms';
  const appRoutes: Routes=[
    {path:'', redirectTo:'/ingresarPresupuesto', pathMatch:'full'},
    {path:'gastos',component:GastosComponent},
    {path:'ingresarPresupuesto', component:IngresarPresupuestoComponent},
    {path:'**', redirectTo:'/ingresarPresupuesto', pathMatch:'full'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    GastosComponent,
    ListarGastoComponent,
    IngresarGastoComponent,
    IngresarPresupuestoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing:true}
    ),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
