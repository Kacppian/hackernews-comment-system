import { Component, OnInit  } from '@angular/core';
import { RestCommentService } from './rest-comment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Hackernews Comment System';
  public comment = {};
  private comment_list:any = [];

  constructor(private rest_comment_service: RestCommentService){
  	
  }


  ngOnInit() {
    this.comment = {
      name: '',
      text: 'Type a comment....'
    };
    this.getComments();

   }


  getComments(){
     this.rest_comment_service.getComments()
    	.then(res=> {
    		this.comment_list = res;
    	})
    	.catch(err => {throw err});
  	} 	
  
  
  save(isValid: boolean){
  	if(isValid){
  		this.rest_comment_service.postComment(this.comment)
  			.then(res=>{
  				this.comment_list += res;
  			})
  			.catch(err=> {throw err});
  	}

  }

  vote(_id, type){
  	this.rest_comment_service.voteComment(_id, type)
  		.then(res=>{
  			let comment = this.comment_list.find(comment => comment._id === _id);
  			if( type==='u' ) {
  				comment.upvotes++;
  			}
  			else if( type==='d' ) {
  				comment.downvotes++
  			}
  		})
  		.catch(err=>{
  			throw err;
  		});
  }

}
