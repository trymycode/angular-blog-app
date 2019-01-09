import { catchError } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from './../blog-http.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
  providers:[Location]
})
export class BlogEditComponent implements OnInit {
  public currentBlog;
  public possibleCategories = ["Comedy","Drama","Action","Technology"];

  constructor(private _route: ActivatedRoute, private router: Router,
    public blogService: BlogService, public blogHttpService: BlogHttpService, 
    private location: Location) { }

  ngOnInit() {
    let myBlogId = this._route.snapshot.paramMap.get('blogId');
    console.log(myBlogId);
    this.blogHttpService.getSingleBlogInformation(myBlogId).subscribe(
      data =>{
        console.log(data);
        this.currentBlog= data["data"];
        console.log("Current blog is:");
        console.log(this.currentBlog);
      },
      error =>{
        console.log("Some error occured");
        console.log("Error!"+ error);
      }
    )
  }
  public editThisBlog():any{
    this.blogHttpService.editBlog(this.currentBlog.blogId, this.currentBlog)
    .subscribe(
      data =>{
        console.log(data);
        alert("Blog edited successfully!");
        setTimeout(()=>{
          this.router.navigate(['/blog',this.currentBlog.blogId]);
        },1000);
      },
      error =>{
        console.log("Some error occured");
        console.log("Error!"+ error.message);
        alert("Error occuered!"+ error);
      }
    )
  }
  public previousPage():any{
    this.location.back();
   }
}
