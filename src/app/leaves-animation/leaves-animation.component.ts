import { Component, OnInit } from '@angular/core';
import { log } from 'util';
declare var $: any;

@Component({
  selector: 'app-leaves-animation',
  templateUrl: './leaves-animation.component.html',
  styleUrls: ['./leaves-animation.component.styl']
})
export class LeavesAnimationComponent implements OnInit {
  constructor() { }
  clickMessage = '';
  user: any = [];
  bot:any = [];
  searchValue = '';

  ngOnInit() {
    // tslint:disable-next-line: only-arrow-functions
    $(document).ready(function() {
      // tslint:disable-next-line: only-arrow-functions
      $('.chat-submit').click(function() {
        $('.chat-box').scrollTop(1000);
      });
      // tslint:disable-next-line: only-arrow-functions
      $('.circle').click(function() {
        $('.main').toggleClass('active');
      });
    });
  }
  onClickMe(event: any) {
    this.user.push(event);
    this.searchValue = '';
    if (event === 'hello') {
      this.bot.push('How can I help you');
  }
  }
}
