// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  clientId:
    '256963892202-t60qss3bvmuf8tpsa29gu909o3df37o2.apps.googleusercontent.com',
  scope:
    'email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.force-ssl',
  clientSecret: 'lyn5NUG9E0xrWZZV_BvAlUq8',
  apiKey: 'AIzaSyCOoI9IdBROV2lRUS3S5ey86hALB2mAl7A',
  apiUrl: 'https://www.googleapis.com/youtube/v3',
  errorMessage: {
    failedToFetchVideo: 'Failed to fetch video',
    failedToSearch: 'Failed to search resources',
    failedToFetchSubscription: 'Failed to fetch your subscribed channels',
    failedToFetchChannel: 'Failed to fetch channel',
    failedToFetchPlaylist: 'Failed to fetch playlist',
    failedToFetchPlaylistDetail: 'Failed to fetch videos in the playlist',
    channelNotFound: 'No channel found.',
    notFound: 'Page not found',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
