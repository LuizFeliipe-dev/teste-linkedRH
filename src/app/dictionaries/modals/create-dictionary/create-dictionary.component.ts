import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-create-dictionary',
  templateUrl: './create-dictionary.component.html',
  styleUrls: ['./create-dictionary.component.scss'],
})
export class CreateDictionaryComponent implements OnInit {
  constructor(private dialogRef: NbDialogRef<any>) {}

  ngOnInit(): void {}

  closeModal(refresh?: boolean) {
    this.dialogRef.close(refresh);
  }
}
