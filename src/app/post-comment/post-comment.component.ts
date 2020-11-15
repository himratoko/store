import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  title : string ="Commentaire";
  constructor() { }

  ngOnInit(): void {
    console.log("Comment");
  }

}
