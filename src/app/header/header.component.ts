import { NgFor, NgIf } from "@angular/common";
import { Component, inject, Injectable } from "@angular/core";
import { RouterLink } from "@angular/router";

const aboutCompanyFn = (text: string) => text;

const aboutCompany: string = aboutCompanyFn ('О компании');

const menuItems: string[] = ['Каталог', 'Стройматериалы', 'Инструменты', 'Электрика', 'Интерьер и одежда'];

const upperCaseMenuItems: string[] = menuItems.map (
    (item:string) => {
        return item.toUpperCase()
    }
)

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgFor, NgIf, RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})

export class HeaderComponent {
    isShowCatalog: boolean = true;
    
    readonly aboutCompany: string = aboutCompany;
    
    menuItems: string[] = upperCaseMenuItems;
  
    isUpperCase: boolean = true;
    
    readonly headerItem3:'Каталог' = 'Каталог';
    
    changeMenuText() {
        this.menuItems = upperCaseMenuItems.map(
            item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
        )
        this.isUpperCase = !this.isUpperCase;
      }
}