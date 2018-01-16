import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CommentaireComponent } from '../commentaire/commentaire.component';

@Component({
  selector: 'app-commentaire-button',
  template: `<button class="btn btn-outline-primary" (click)="open()">Rédiger un commentaire</button>`
})
export class CommentaireButtonComponent implements OnInit {
  constructor(private modalService: NgbModal) {}
  @Input() pseudo;

  ngOnInit() {}

  open() {
    const modalRef = this.modalService.open(CommentaireComponent);
    modalRef.componentInstance.pseudo = this.pseudo;
  }
}
