// import { Component, OnInit } from '@angular/core';
// // import { MD_DIALOG_DATA,MdDialogRef,OverlayContainer } from '@angular/material';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// import { Component, OnInit, Input, forwardRef, ViewEncapsulation, HostListener } from '@angular/core';
import { Component, OnInit, Input, forwardRef, ViewEncapsulation, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginComponent),
      multi: true,
    }
  ]
})
export class LoginComponent implements OnInit, ControlValueAccessor {
  @Input() dialogTitle = '';
  /*
   * 主题色 white | black
   * */
  @Input() theme = 'white';
  /*
   * 位置 middle | bottom
   * */
  @Input() position = 'middle';
  /*
   * 是否显示遮罩层
   * */
  @Input() showModal = true;

  /*
   * dialog size small | middle | large
   * */
  @Input() size = 'middle';
  /*
   * 显示/隐藏
   * */
  _visible = false;

  constructor() {
  }

  ngOnInit() {
  }

  get visible() {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
    this.onChangeCallback(this._visible);
  }

  writeValue(val: boolean) {
    this.visible = val;
  }

  onChangeCallback(val) {
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  onTouchCallback() {
  }

  registerOnTouched(fn: any) {
    this.onTouchCallback = fn;
  }

  close() {
    this._visible = false;
  }

  show() {
    this._visible = true;
  }
}
