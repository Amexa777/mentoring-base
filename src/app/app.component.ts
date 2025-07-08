import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
    
const aboutCompanyFn = (text: string) => text;

const aboutCompany : string = aboutCompanyFn ('О компании');

const newPages : number[]= [5, 4, 3, 2, 1];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'mentoring-first-project';
  
  isShowAboutCompany: boolean = true;
  
  isShowCatalog: boolean = true;
  
  readonly headerItem3 :'Каталог' = 'Каталог';
  
  isShowImg: boolean = true;
  
  readonly newPages :number[] = newPages;
  
  readonly aboutCompany :string = aboutCompany;
}





