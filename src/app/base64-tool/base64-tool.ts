import { Component,signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-base64-tool',
  imports: [CommonModule,FormsModule],
  templateUrl: './base64-tool.html',
  styleUrl: './base64-tool.css',
})
export class Base64Tool {

  plainText= signal('');
  base64Text =  signal('');

  encode(val:string){
    this.plainText.set(val);
    try {
      this.base64Text.set(btoa(val));
    } catch (e) {

    }
  }
  decode(val:string){
    this.base64Text.set(val);
    try {
      this.plainText.set(atob(val));
    } catch (e) {

    }
  }

}
