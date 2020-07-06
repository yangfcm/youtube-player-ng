import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChannelIntro } from '../interfaces/channelIntro';

@Component({
  selector: 'app-channel-intro',
  template: `
    <div class="ui segments">
      <div class="ui segment">
        <p>
          <i class="calendar plus icon"></i>
          Published on {{ formatDate(channelIntro.snippet.publishedAt) }}
        </p>
      </div>
      <div class="ui segment">
        <p>
          <i class="file alternate icon"></i>Description -
          {{ channelIntro.snippet.description }}
        </p>
      </div>
      <div class="ui segment">
        <p>
          <i class="users icon"></i>
          {{ formatNumber(channelIntro.statistics.subscriberCount) }}
          subscribers
        </p>
      </div>
      <div class="ui segment">
        <p>
          <i class="eye icon"></i
          >{{ formatNumber(channelIntro.statistics.viewCount) }} views
        </p>
      </div>
    </div>
  `,
  styles: [],
})
export class ChannelIntroComponent implements OnInit {
  channelIntro: IChannelIntro;
  channelId: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      // console.log(data.channelIntro.snippet.publishedAt.toString());
      this.channelIntro = data.channelIntro;
    });
  }

  ngOnInit(): void {}

  formatNumber(number: string): string {
    let arrNum = number.split('');
    let arr = [];
    let part = '';
    for (let i = 0; i < arrNum.length; i++) {
      let num = arrNum[arrNum.length - i - 1];
      part = num + part;
      if ((i + 1) % 3 === 0) {
        arr.unshift(part);
        part = '';
      }
    }
    if (part.length > 0) {
      arr.unshift(part);
    }
    return arr.join(',');
  }

  formatDate(date: string): string {
    const dDate = new Date(date);
    let month;
    switch (dDate.getMonth() + 1) {
      case 1:
        month = 'January';
        break;
      case 2:
        month = 'February';
        break;
      case 3:
        month = 'Mary';
        break;
      case 4:
        month = 'April';
        break;
      case 5:
        month = 'May';
        break;
      case 6:
        month = 'June';
        break;
      case 7:
        month = 'July';
        break;
      case 8:
        month = 'August';
        break;
      case 9:
        month = 'September';
        break;
      case 10:
        month = 'October';
        break;
      case 11:
        month = 'November';
        break;
      case 12:
        month = 'December';
        break;
      default:
        month = '';
    }
    return `${dDate.getDate()} ${month} ${dDate.getFullYear()}`;
  }
}
