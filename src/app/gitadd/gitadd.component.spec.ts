import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitaddComponent } from './gitadd.component';

describe('GitaddComponent', () => {
  let component: GitaddComponent;
  let fixture: ComponentFixture<GitaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
