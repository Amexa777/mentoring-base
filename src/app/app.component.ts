import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const aboutCompanyFn = (text: string) => text;

const aboutCompany = aboutCompanyFn ('О компании');

const newPages = [5, 4, 3, 2, 1];

const menuItems  = ['Каталог','Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'mentoring-first-project';
  
  isShowAboutCompany = true;
  
  isShowCatalog = true;
  
  readonly headerItem3 = 'Каталог';
  
  isShowImg = true;
  
  readonly newPages = newPages;
  
  readonly aboutCompany = aboutCompany;
  
  isUpperCase = true;
  


}

