import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { IncreaseComponent } from './increase.component';

describe('IncreaseComponent', () => {
  let component: IncreaseComponent;
  let fixture: ComponentFixture<IncreaseComponent>;

  beforeEach(async(() => {
    console.log('beforeEach - Async');
    TestBed.configureTestingModule({ // metados de configuração de um módulo
      declarations: [ IncreaseComponent ]
    })
    .compileComponents(); // Esse método compila template e css
    // filesystem
  }));

  beforeEach(() => {
    console.log('beforeEach');
    
    /*TestBed.configureTestingModule({
      declarations: [ IncreaseComponent ]
    });*/
    // podemos usar diretamente assim, por causa do webpack que junto todo o conteúdo do t
    // template e css dentro de um mesmo bundle - não sendo necessário acessar filesystem
    fixture = TestBed.createComponent(IncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // 
  });

  beforeAll(() => {
    console.log('beforeAll');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component funcionality', () => {
    let inputElement;
    let ButtonElement;

    beforeEach(() => {
      console.log('beforeEach - Component funcionality');
      inputElement = fixture.debugElement.query(By.css('#inputNumber'));
      ButtonElement = fixture.debugElement.query(By.css('#buttonNumber'));

      // const element: HTMLElement =  inputElement.nativeElement;
      // element.innerHTML;
    });

    it('Should input start with 0', () => {      
      expect(inputElement.nativeElement.value).toEqual('0');
    });
  
    it('Should add 1 when IncreaseButton clicked', () => {
      ButtonElement.triggerEventHandler('click', null); // simula o click de usuário no botão
      fixture.detectChanges(); // rendeniza o template aplicando as modificações realizadas 

      expect(inputElement.nativeElement.value).toEqual('1');
    });

    it('Should emit updated value (1) when IncreaseButton clicked', () => {
      spyOn(component.increaseValueChange, 'emit'); // spy que observa tudo o que o método informado "faz". quando foi chamado por exemplo.

      ButtonElement.triggerEventHandler('click', null);
      fixture.detectChanges();

      expect(component.increaseValueChange.emit).toHaveBeenCalledWith(1); // usando o spy, para saber se o método foi chamado
    });
  });
  
  afterEach(() => {
    console.log('afterEach');
  });

  afterAll( () => {
    console.log('afterAll');
  })
});
