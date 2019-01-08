import { Component, OnInit } from '@angular/core';
import { BlogService } from './../blog.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allBlogs: any;

  ngOnInit() {
    this.allBlogs = this.blogService.getAllBlogs();
    return this.allBlogs;
    console.log(this.allBlogs);
  }
  
  constructor( public blogService: BlogService) {}
}
