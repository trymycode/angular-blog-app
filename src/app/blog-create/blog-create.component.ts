import { BlogHttpService } from './../blog-http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  public blogTitle: string;
  public blogBodyHtml: string;
  public blogDescription: string;
  public blogCategory: string;
  public possibleCategories = ["Comedy","Drama","Action","Technology"];

  constructor( public blogHttpService: BlogHttpService,private _route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }
   public createBlog():any{
    let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category: this.blogCategory
    }
    console.log(blogData);
    this.blogHttpService.createBlog(blogData).subscribe(
      data => {
        console.log("Blog Created");
        console.log(data);
        alert("Blog Posted successfully!");
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000);
      },
      error => {
        console.log("Some error occured");
        console.log(error);
        alert("Some error occured");
      }
    )

   }

}
