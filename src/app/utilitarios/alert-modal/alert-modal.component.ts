import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() mensagem: string = '';
  @Input() tipo: string = 'success';

  onClose(){
    this.bsModalRef.hide();
  }

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
