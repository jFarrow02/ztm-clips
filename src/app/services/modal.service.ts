import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  private modals: IModal[] = [];

  constructor() { }

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((el) => {
      return el.id !== id;
    });
  }

  isModalOpen(id: string): boolean {
    return Boolean(this.modals.find((el) => {return el.id === id})?.visible);
  }

  toggleModal(id: string) {
    let modal = this.modals.find((el) => el.id === id);
    
    if(modal) {
      modal.visible = !modal.visible;
      console.log(modal);
    }
  }
}
