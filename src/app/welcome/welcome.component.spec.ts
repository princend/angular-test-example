import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../service/user.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userService: UserService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('userName should be Test User', () => {
    userService = fixture.debugElement.injector.get(UserService);
    userService = TestBed.get(UserService);

    expect(userService.user.name).toBe('Test User');
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(false);
    // 請不要參考測試程式碼裡提供給測試模組的 userServiceStub 物件。
    // 這樣不行！ 被注入元件的 userService 例項是完全不一樣的物件，它提供的是 userServiceStub 的複製。
    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(true);
  });

  let userServiceStub: Partial<UserService> = {
    isLoggedIn: true,
    user: { name: 'Test User' }
  }
});

