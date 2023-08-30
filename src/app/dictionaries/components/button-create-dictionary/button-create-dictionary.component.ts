import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CreateDictionaryComponent } from '../../modals/create-dictionary/create-dictionary.component';

@Component({
  selector: 'app-button-create-dictionary',
  templateUrl: './button-create-dictionary.component.html',
  styleUrls: ['./button-create-dictionary.component.scss'],
  providers: [NbDialogService]
})
export class ButtonCreateDictionaryComponent implements OnInit {
  @Output() onRefresh = new EventEmitter<void>();

  // constructor(private dialogService: NbDialogService) {}

  ngOnInit(): void {}

  openModal() {
    // this.dialogService
    //   .open(CreateDictionaryComponent)
    //   .onClose.subscribe((refresh) => {
    //     if (refresh) {
    //       this.onRefresh.emit();
    //     }
    //   });
  }
}
