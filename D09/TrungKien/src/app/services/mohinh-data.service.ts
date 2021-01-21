import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class MohinhDataService {

  constructor() { }
  public itemList: Array<Item> = [{
    name: "Mô hình kakashi VjpPr0",
    price: 3200,
    status: true,
    imgURL: "../../../assets/fGK92XEOEaHap83Zmfuu_simg_de2fe0_500x500_maxb.png",
    id: "k1",
  },{
    name: "Mô hình Kakashi chưa VjpPr0",
    price: 3500,
    status: true,
    imgURL: "../../../assets/item.jpg",
    id: "k2",
  },
  {
    name: "Mô hình Đát Đì Zoro",
    price: 3300,
    status: false,
    imgURL: "../../../assets/item2.jpg",
    id: "k3",
  }, {
    name: "Mô hình Đát Đì lứng lừng",
    price: 3300,
    status: true,
    imgURL: "../../../assets/item3.jpg",
    id: "k4",
  },
  {
    name: "Mô hình Naruto",
    price: 3300,
    status: false,
    imgURL: "../../../assets/item4.jpg",
    id: "k5",
  },
  {
    name: "Mô hình Luffy dza màu",
    price: 3300,
    status: false,
    imgURL: "../../../assets/item5.jpg",
    id: "k6",
  }, {
    name: "Mô hình Sasuku Ckơi Đồ",
    price: 3300,
    status: true,
    imgURL: "../../../assets/item6.jpg",
    id: "k7",
  }, {
    name: "Mô hình Batman Thông Đjt",
    price: 3300,
    status: true,
    imgURL: "../../../assets/item7.jpg",
    id: "k8",
  }, {
    name: "Mô hình Batman thời xưa",
    price: 3300,
    status: true,
    imgURL: "../../../assets/item8.jpg",
    id: "k9",
  },
  {
    name: "Mô hình Batman Nhiều Đồ",
    price: 3300,
    status: true,
    imgURL: "../../../assets/item9.jpg",
    id: "k10",
  }
  ]
}
