import { Component, Input} from '@angular/core';
import { Posts } from '../../mock-posts';
import { PostComponent } from '../post/post.component';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-posts',
  imports: [PostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts : any;
  @Input() colClass:any ;

  constructor(private postServices: PostService){
    postServices.getPosts().subscribe(
      (retrievedData)=>{
        this.posts=retrievedData;
      });
  }

  onDelete(post :any){
    this.postServices.deletePost(post.id).subscribe(()=>{
      this.posts=this.posts.filter(
       (p:any )=> p.id!=post.id 
      )
    });
  }

}
