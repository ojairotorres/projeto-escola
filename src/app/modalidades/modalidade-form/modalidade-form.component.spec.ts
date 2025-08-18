import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeFormComponent } from './modalidade-form.component';

describe('ModalidadeFormComponent', () => {
  let component: ModalidadeFormComponent;
  let fixture: ComponentFixture<ModalidadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalidadeFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
