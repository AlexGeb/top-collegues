import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Commentaire } from '../../shared/domain/commentaire';
import { ColleguesService } from '../../shared/services/collegues.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  @Input() pseudo;
  comment = '';
  error: string;
  constructor(
    private http: HttpClient,
    private collegueSvc: ColleguesService,
    public activeModal: NgbActiveModal
  ) {}

  ngOnInit() {}

  sendComment() {
    const commentaire = new Commentaire();
    commentaire.text = this.comment;
    commentaire.pseudo = this.pseudo;
    this.http
      .post(environment.endpoint + 'commentaires', commentaire)
      .subscribe(
        () => {
          console.log('commentaire envoyé');
          this.activeModal.close();
        },
        err => {
          this.error = err;
        }
      );
  }
  getUnvalidMsg(): string {
    if (this.comment.length < 10) {
      return 'Ecrivez au moins 10 caractères !';
    } else if (this.comment.length > 255) {
      return 'Ecrivez maximum 255 caractères !';
    }
  }
}
