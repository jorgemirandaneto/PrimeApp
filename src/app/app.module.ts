import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { PessoaFisicaListComponent } from './pessoa-fisica-list/pessoa-fisica-list.component';
import { PessoaFisicaFormComponent } from './pessoa-fisica-form/pessoa-fisica-form.component';
import { HttpClientModule } from '@angular/common/http';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { CPFPipe } from './cpf.pipe';
import { PessoaJuridicaFormComponent } from './pessoa-juridica-form/pessoa-juridica-form.component';
import { PessoaJuridicaListComponent } from './pessoa-juridica-list/pessoa-juridica-list.component';
import { CNPJPipe } from './cnpj.pipe';
registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    PessoaFisicaListComponent,
    PessoaFisicaFormComponent,
    CPFPipe,
    CNPJPipe,
    PessoaJuridicaFormComponent,
    PessoaJuridicaListComponent

  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt-BR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
