import { Injectable } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class MenuService {

  constructor(public translate: TranslateService) {}

  getAll() {
    return [
      {
        link: '/stories',
        label: this.translate.instant('STORIES'),
        icon: 'list'
      },
      {
        link: '/team',
        label: this.translate.instant('TEAM'),
        icon: 'group'
      },
      {
        link: '/',
        label: this.translate.instant('HOME'),
        icon: 'explore'
      },
      {
        link: 'http://reactprimer.nyasha.me',
        label: this.translate.instant('React Version'),
        externalRedirect: true,
        icon: 'bookmark'
      },
      {
        link: 'http://primer.nyasha.me/docs',
        label: this.translate.instant('DOCS'),
        externalRedirect: true,
        icon: 'local_library'
      }
    ];
  }
}
