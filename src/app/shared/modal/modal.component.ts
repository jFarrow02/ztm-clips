import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modal: ModalService;

  @Input()
  modalId = '';

  closeModal(){
    console.log(this.modalId);
    this.modal.toggleModal(this.modalId);
  }

  constructor(modal: ModalService, public el: ElementRef) {
    this.modal = modal;
    console.log(el);
  }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

}
