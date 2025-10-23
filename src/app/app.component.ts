import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

const aboutCompanyFn = (text: string) => text;

const aboutCompany: string = aboutCompanyFn ('О компании');

const newPages: number[]= [5, 4, 3, 2, 1];

const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems: string[] = menuItems.map (
    (item:string) => {
        return item.toUpperCase()
    }
)
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink, HeaderComponent],
  templateUrl: './app.component.html', 
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title: string = 'mentoring-first-project';
  
  isShowAboutCompany: boolean = true;
  
  isShowCatalog: boolean = true;
  
  readonly headerItem3:'Каталог' = 'Каталог';
  
  isShowImg: boolean = true;
  
  readonly newPages: number[] = newPages;
  
  readonly aboutCompany: string = aboutCompany;
  
  menuItems: string[] = upperCaseMenuItems;
  
  isUpperCase: boolean = true;
  
  changeMenuText() {
    this.menuItems = upperCaseMenuItems.map(
        item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase = !this.isUpperCase;
  }
}