import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { formDirectives } from '../../../form-directives';
import { NgForOf, NgIf } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OibFormControl } from '../../../../../../../shared/model/form.model';
import { createFormGroup, groupFormControlsByRow } from '../../../form-utils';
import { FormComponent } from '../../form.component';

@Component({
  selector: 'oib-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.scss'],
  imports: [...formDirectives, NgIf, NgForOf, TranslateModule, forwardRef(() => FormComponent)],
  standalone: true
})
export class EditElementComponent implements OnInit {
  form: FormGroup | null = null;
  controlsByRow: Array<Array<OibFormControl>> | null = null;

  @Input({ required: true }) formDescription!: Array<OibFormControl>;
  @Input({ required: true }) element!: any;
  @Input({ required: true }) existingElements!: Array<any>;

  @Output() readonly saved = new EventEmitter<any>();
  @Output() readonly cancelled = new EventEmitter<void>();

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit() {
    this.controlsByRow = groupFormControlsByRow(this.formDescription);
    this.form = createFormGroup(this.formDescription, this.fb);
    this.form.patchValue(this.element);
  }

  ok() {
    if (!this.form!.valid) {
      return;
    }

    this.saved.emit(this.form!.value);
  }

  cancel() {
    this.cancelled.emit(undefined);
  }
}
