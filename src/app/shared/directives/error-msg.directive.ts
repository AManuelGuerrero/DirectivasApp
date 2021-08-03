import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges{

  private htmlElement!: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _mensaje: string = ''; 
  private _valido: boolean = false;
  
  @Input() set color( valor: string){
    this._color = valor;
    this.setColor();
  }
  
  @Input() set mensaje(valor:string){
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor : boolean){
    this._valido = valor;
    this.ToggleView();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(el);
    this.htmlElement = el;
   }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes.mensaje){
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if(changes.color){
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    
  }

  ngOnInit(): void {
    
    console.log('OnInit directive');

    this.setColor();
    this.setMensaje();
    this.setClass();
    this.ToggleView();
    
  }

   setColor():void{
     this.htmlElement.nativeElement.style.color = this._color;
   }

   setMensaje():void{
     if(this._mensaje.trim()!==''){
       this.htmlElement.nativeElement.innerText = this._mensaje;
     }
   }

  setClass(){
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  ToggleView(){
    if(this._valido){
      this.htmlElement.nativeElement.classList.add("hidden");
    }else{
      this.htmlElement.nativeElement.classList.remove("hidden");
    }
  }

}
