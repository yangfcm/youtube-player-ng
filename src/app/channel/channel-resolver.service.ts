import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { IChannelIntro } from './interfaces/channelIntro';
import { ChannelService } from './channel.service';
import { environment } from '../../environments/environment';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelResolverService implements Resolve<IChannelIntro> {
  constructor(private router: Router, private channelService: ChannelService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const channelId = route.parent.params.id; // Because ChannelResolverService is used in child root
    // You need to look up to parent property to get the id
    return this.channelService.fetchChannelIntro(channelId).pipe(
      catchError((err) => {
        if (err === environment.errorMessage.noChannelFound) {
          this.router.navigateByUrl('/not-found');
          return EMPTY;
        }
        return err;
      })
    );
  }
}
