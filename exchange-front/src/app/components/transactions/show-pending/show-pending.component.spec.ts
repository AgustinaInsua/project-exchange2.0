import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPendingComponent } from './show-pending.component';

describe('ShowPendingComponent', () => {
  let component: ShowPendingComponent;
  let fixture: ComponentFixture<ShowPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowPendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
