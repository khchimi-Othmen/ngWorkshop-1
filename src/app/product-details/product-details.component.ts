import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
id!:number;
  constructor(private actR:ActivatedRoute) {
  }
  //paramMap bch twali dynamique
  // snapshot relie b table de routage
  // bch ysajel id w khw(recupere awel ma ychargii comp)
  ngOnInit(): void {
    this.id=this.actR.snapshot.params['id']
  }
}
