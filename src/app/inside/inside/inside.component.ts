import { Component, OnInit } from '@angular/core';
import { Collegue } from '../../shared/domain/collegue';
import { ColleguesService } from '../../shared/services/collegues.service';
import { IsOnlineService } from '../../shared/services/is-online.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css']
})
export class InsideComponent implements OnInit {
  constructor(
    private colleguesSvc: ColleguesService,
    public isOnlineSvc: IsOnlineService,
    private modalService: NgbModal
  ) {}

  displayAlert: boolean;
  alert: { type: string; msg: string };

  avisForm = new FormGroup({
    note: new FormControl(),
    suggestions: new FormControl()
  });

  ngOnInit() {
    this.colleguesSvc.fetchColleguesFromServer().subscribe();
  }
  addCollegue(pseudo: HTMLInputElement, urlImage: HTMLInputElement) {
    if (!pseudo.value || !urlImage.value) {
      this.alert = {
        type: 'danger',
        msg: '<strong>Erreur !</strong> Il manque des informations !'
      };
      this.dismissAlertAfter2Seconds();
    } else {
      console.log(JSON.stringify(new Collegue(pseudo.value, urlImage.value)));
      this.colleguesSvc
        .sauvegarder(new Collegue(pseudo.value, urlImage.value))
        .subscribe(col => {
          this.alert = {
            type: 'success',
            msg: `Le collègue ${pseudo.value} a été ajouté avec succés`
          };
          this.dismissAlertAfter2Seconds();
        });
    }
  }
  dismissAlertAfter2Seconds() {
    setTimeout(() => {
      this.alert = null;
    }, 2000);
  }

  open(content) {
    this.modalService.open(content);
  }

  saveAvis() {
    console.log('saaaaave : ', this.avisForm.value);
  }
}
