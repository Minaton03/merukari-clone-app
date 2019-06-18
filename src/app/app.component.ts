import { Component } from '@angular/core';
import { product } from './class/product';

const PRODUCT: product[] = [
{
  productName: 'Tシャツ', exhibitor: '出品者A', category: '洋服', brand: 'mina-to', size: 'M',state: 'やや使用感あり', deliveryFee: 200, shippingMethod: 'ゆうパック', region: '東京' , scheduledShippingDate: 3, image: '../assets/img/logo.png'},
  {productName: 'Tシャツ', exhibitor: '出品者A', category: '洋服', brand: 'mina-to', size: 'M',state: 'やや使用感あり', deliveryFee: 200, shippingMethod: 'ゆうパック', region: '東京' , scheduledShippingDate: 3, image: ''},
  {productName: 'Tシャツ', exhibitor: '出品者A', category: '洋服', brand: 'mina-to', size: 'M',state: 'やや使用感あり', deliveryFee: 200, shippingMethod: 'ゆうパック', region: '東京' , scheduledShippingDate: 3, image: ''},
  {productName: 'Tシャツ', exhibitor: '出品者A', category: '洋服', brand: 'mina-to', size: 'M',state: 'やや使用感あり', deliveryFee: 200, shippingMethod: 'ゆうパック', region: '東京' , scheduledShippingDate: 3, image: ''},
  {productName: 'Tシャツ', exhibitor: '出品者A', category: '洋服', brand: 'mina-to', size: 'M',state: 'やや使用感あり', deliveryFee: 200, shippingMethod: 'ゆうパック', region: '東京' , scheduledShippingDate: 3, image: ''},
  {productName: 'Tシャツ', exhibitor: '出品者A', category: '洋服', brand: 'mina-to', size: 'M',state: 'やや使用感あり', deliveryFee: 200, shippingMethod: 'ゆうパック', region: '東京' , scheduledShippingDate: 3, image: ''},
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product = PRODUCT;
}
