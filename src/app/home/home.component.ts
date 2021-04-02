import { Component, OnInit } from '@angular/core';
import OfertasSerive from '../ofertas.service';
import Oferta from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ OfertasSerive ],
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasSerive) { }

  ngOnInit(): void {
    this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas);
  }

}
