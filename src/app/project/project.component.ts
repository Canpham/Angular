import { Component, OnInit } from '@angular/core';
import {Projects} from '../project';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Projects[] = [{
    id : 1,
    name: 'omegalulz1',
    img:'http://images7.memedroid.com/images/UPLOADED861/5c4cce964dab7.jpeg',
    price: 1000
    
  },
  {
    id : 2,
    name: 'omegalulz2',
    img:'https://i.ytimg.com/vi/NJcz1Ww7Hyk/hqdefault.jpg',
    price: 1000
    
  },
  {
    id : 3,
    name: 'omegalulz3',
    img:'https://i.ytimg.com/vi/X4Bu_v883ck/hqdefault.jpg',
    price: 1000
    
  }

  ];

  
  selectedProduct: Projects;
  constructor() { }

  ngOnInit() {
  }

  detailProduct = projects => {
    console.log(projects);
     this.selectedProduct = projects;
  }

  deleteProduct = project =>{
    console.log('deleteProduct');
    this.projects = this.projects.filter(item => item.id !== project.id);
  }

}
