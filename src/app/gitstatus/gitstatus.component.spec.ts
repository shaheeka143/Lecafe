import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitstatusComponent } from './gitstatus.component';

describe('GitstatusComponent', () => {
  let component: GitstatusComponent;
  let fixture: ComponentFixture<GitstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
