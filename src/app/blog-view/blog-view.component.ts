import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from './../blog-http.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css']
})
export class BlogViewComponent implements OnInit {
  public currentBlog;
  
  constructor( private _route: ActivatedRoute, private router: Router,public blogService: BlogService, public blogHttpService: BlogHttpService) { }

  ngOnInit() {
    
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog= data["data"];
      },
      error =>{
        console.log("Some error occured");
        console.log("Error!"+ error);
      }
    )
    
  }
 
}
