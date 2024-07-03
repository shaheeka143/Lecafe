import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitinitComponent } from './gitinit.component';

describe('GitinitComponent', () => {
  let component: GitinitComponent;
  let fixture: ComponentFixture<GitinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitinitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
