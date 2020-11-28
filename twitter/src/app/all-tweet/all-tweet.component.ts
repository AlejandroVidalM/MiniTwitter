import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tweets } from '../dto/allTweet/Tweets.dto';
import { AllTweetServiceService } from '../services/allTweet.service';

@Component({
  selector: 'app-all-tweet',
  templateUrl: './all-tweet.component.html',
  styleUrls: ['./all-tweet.component.css']
})
export class AllTweetComponent implements OnInit {

  tweets:Tweets[];
  columnsToDisplay=["Usuario","Mensajes","Likes","Me gusta"];
  constructor(private TodoTweetServiceService:AllTweetServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tweets=[];
    this.mostrarTweets();
  }
  mostrarTweets(){
    this.TodoTweetServiceService.AllTweet().subscribe(resp=>{
      resp.forEach(element => {
        this.tweets.push(element);
      });
    });
  }

}
