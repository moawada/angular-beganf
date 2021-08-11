import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';

export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product;
  constructor() {}

  ngOnInit() {}
}
