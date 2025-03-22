import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-post',
  imports: [FormsModule],
  templateUrl: './edit-post.component.html',
  styleUrl: './edit-post.component.css'
})
export class EditPostComponent {
  id:any
  title:any
  content:any
  constructor(private postService:PostService, private route:ActivatedRoute, private router:Router){
    this.route.params.subscribe(
      (parameters) => this.postService.getPost(parameters['id']).subscribe(
        (retrivePost)=>{
          console.log(`retrive post = ${JSON.stringify(retrivePost)}`)
          this.id=retrivePost[0].id,
          this.title=retrivePost[0].title,
          this.content=retrivePost[0].content
        }))
  }

  onSubmit(){
    const updatedPost={
      id : this.id,
      title:this.title,
      content:this.content
    }
    this.postService.editPost(updatedPost).subscribe(()=>{
      console.log(`updated post`)
      this.router.navigate(['/blog'])
    })
  }



}
