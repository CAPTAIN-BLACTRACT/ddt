import { Component,signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-json-tool',
  standalone: true,
  imports: [CommonModule,FormsModule],
  template: `
  <h2>JSON Formatter</h2>
  <div class="toolbar">
  <button (click)="format()">Prettify</button>
  <button (click)="minify()">Minify</button>
  <button (click)="clear()">Clear</button>

  <span class="error" *ngIf="error()">{{error()}}</span>
  </div>

  <div class="editor-container">
  <textarea
  [(ngModel)]="inputJson"
  placeholder="Paste Json Holder"
  spellcheck="false">
  </textarea>
  </div>

  `,
  styles: [`
    .toolbar{
      margin-bottom: 15px;
      display:flex;
      gap:10px
      align-items: center;
    }

    button{
      background: #007acc;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      cursor:  pointer;
    }

    button:hover{
      background:#005f9e;
    }

    .error{
      color: #f48771;
      margin-left:auto;
      font-family: monospace;
    }
    .editor-container{
      height:70vh;
      display:flex;
    }
    textarea{
      width:100%;
      background:#1e1e1e;
      color:#d4d4d4;
      height:100%;
      border:1px solid #333;
      padding:15px;
      font-family:'Consolas', monospace;
      font-size:14px;
      resize:none;
      outline:none;
    }
    textarea:focus{
      border-color: #007acc;
    }
    `],
})
export class JsonTool {
  inputJson= signal('');
  error=signal('');

  format(){
    try{
        const parsed= JSON.parse(this.inputJson());
        this.inputJson.set(JSON.stringify(parsed,null,2));
        this.error.set('');

    }
    catch(err:any){

      this.error.set('Invalid JSON: '+ err.message)

    }
  }

  minify(){
      try{
        const parsed= JSON.parse(this.inputJson());
        this.inputJson.set(JSON.stringify(parsed));
        this.error.set('');
      }catch(err:any){

        this.error.set('Invalid JSON')

      }
  }

  clear(){
    this.inputJson.set('');
    this.error.set('');

  }
}
