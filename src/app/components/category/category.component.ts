import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList!:Category[]

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory(){
    this.categoriesService.getCategories().subscribe(data=>{
      this.categoryList=data
    })
  }

  getCategoryId(category:Category){
    console.log(category)
  }

}
