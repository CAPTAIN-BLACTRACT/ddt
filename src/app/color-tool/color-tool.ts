import { Component,signal } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-color-tool',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './color-tool.html',
  styleUrl: './color-tool.css',
})
export class ColorTool {
  hex= signal('#007acc');
  r=signal(0);
  g=signal(122);
  b=signal(204);

  updateFromHex(value:string){
    this.hex.set(value);

    if(/^#?[0-9A-Fa-f]{6}$/.test(value)){
      const hex = value.replace('#','');

      this.r.set(parseInt(hex.substring(0,2),16));
      this.g.set(parseInt(hex.substring(2,4),16));
      this.b.set(parseInt(hex.substring(4,6),16));
    }
  }
  updateFromRgb(r:number, g:number, b:number){
    this.r.set(r); this.g.set(g) this.b.set(b);

    const toHex = (n:number)=>{
        const hex = Math.max(0,Math.min(255,n)).toString(16);
        return hex.length === 1? '0'+hex : hex;
    };

    this.hex.set(`#${toHex(r)}${toHex(g)}${toHex(b)}`);
  }
}
