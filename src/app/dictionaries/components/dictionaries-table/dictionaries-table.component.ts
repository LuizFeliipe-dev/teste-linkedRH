import {Component, Input, OnInit} from '@angular/core';
import {DictionaryModel} from "../../../../models/dictionary.model";
import {BsModalService} from "ngx-bootstrap/modal";
import {DeleteDictionaryComponent} from "../../modals/delete-dictionary/delete-dictionary.component";
import {EditDictionaryComponent} from "../../../edit-dictionary/edit-dictionary.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dictionaries-table',
  templateUrl: './dictionaries-table.component.html',
  styleUrls: ['./dictionaries-table.component.scss'],
})
export class DictionariesTableComponent implements OnInit{
  @Input() dictionaries: DictionaryModel[] | null

  constructor(private modalService: BsModalService, private router: Router) {
  }

  ngOnInit(): void {
  }

  goToVisualizationDictionary(event: DictionaryModel){
    this.router.navigate([`/texts/${event.id}`])
  }

  openEditModal(event: DictionaryModel){
    this.router.navigate([`/${event.id}`])
  }

  openDeleteModal(event: DictionaryModel){
    const initalState = {
      rowData: event
    }

    this.modalService.show(DeleteDictionaryComponent, { initialState: initalState })
  }
}
