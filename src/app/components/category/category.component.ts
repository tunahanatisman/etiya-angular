import { Component, OnInit } from '@angular/core';
import  Category  from 'src/app/models/category';
import { CategoriesService } from 'src/app/services/categories/categories.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList!:Category[]
  loading: boolean = true

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.getCategory()
    }, 1000);
  }

  getCategory(){
    this.categoriesService.getList().subscribe(data=>{
      this.categoryList=data
      this.loading = false;
    })
  }

  getCategoryById(category: Category){
    console.log(category.id)
  }

}
