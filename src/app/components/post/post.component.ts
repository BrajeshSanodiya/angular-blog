import { Component, EventEmitter, Input, Output} from '@angular/core';
import { PostService } from '../../services/post.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [RouterLink],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent{
 
  @Input() post:any;
  @Output() onDeletePost: EventEmitter<any> = new EventEmitter();

  constructor(private postService:PostService){

  }
  onDelete() {
   //this.postService.deletePost(this.post.id).subscribe();
   this.onDeletePost.emit();
  }

}
