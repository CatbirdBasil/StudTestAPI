import {ElementRef, Injectable} from '@angular/core';
import {Md5} from "ts-md5";
import {GRAVATAR_BASE_URL} from "@environments/environment";

@Injectable({
  providedIn: 'root'
})
export class Utils {

  constructor() {
  }

  static getGravatarLink(email: string) {
    return GRAVATAR_BASE_URL + Md5.hashStr(email.trim().toLowerCase()).toString();
  }

  static scrollToBottom(element: ElementRef) {
    try {
      // setTimeout(() => {}, 100);
      element.nativeElement.scrollTop = element.nativeElement.scrollHeight;
    } catch (err) {
      /**
       * catch errors with scroll which going beyond its max value
       * no need to handle or log smth
       */
    }
  }
}
