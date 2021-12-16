import { EventEmitter } from '@angular/core';
import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("nameInput", {static: false}) nameInputRef: ElementRef;
  @ViewChild("amountInput", {static: false}) amountInputRef: ElementRef;

  @Output() ingredientAdded: EventEmitter<Ingredient> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(): void {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountInputRef.nativeElement.value;

    this.ingredientAdded.emit(new Ingredient(name, amount));
  }

}
