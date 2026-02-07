import { Routes } from '@angular/router';
import {JsonTool} from './json-tool/json-tool';
import {ColorTool} from './color-tool/color-tool';
import {Base64Tool} from './base64-tool/base64-tool';

export const routes: Routes = [
  {path:'', redirectTo: 'json', pathMatch: 'full'},
  {path:'json', component:'JsonTool'},
  {path:'color', color:'ColorTool'},
  {path:'base64', color:'Base64Tool'}
];
