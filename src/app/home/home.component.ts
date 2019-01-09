import { BlogHttpService } from './../blog-http.service';
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
    console.log("Home component oninit called");
    this.allBlogs = this.blogHttpService.getAllBlogs().subscribe(
      data =>{
        console.log(data);
        this.allBlogs = data["data"];
      },
      error =>{
        console.log("Some error occured");
        console.log("Error!"+ error);
      }
      
    )
    console.log(this.allBlogs);
   
  }
  
  constructor( public blogHttpService: BlogHttpService ) {}
}
