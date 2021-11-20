import { Component, OnInit } from '@angular/core';
import {Holder} from "../../domain/model/holder";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {HolderService} from "../../domain/service/holder.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {MatTab} from "@angular/material/tabs";

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  private holder: Holder = new Holder();
  public form: FormGroup = new FormGroup({
    id: new FormControl(),
    userId: new FormControl(),
    title: new FormControl(),
    body: new FormControl()});
  private readonly params: any;

  constructor(private service: HolderService, private router: Router, private formBuilder: FormBuilder) {
    this.params = this.router.getCurrentNavigation();
  }

  updateItem(){
    this.holder.title = this.form.value.title
    this.holder.body = this.form.value.body
    if(!this.holder.title || this.holder.title.length == 0 ||
      !this.holder.body || this.holder.body.length == 0){
      Swal.fire({icon: "warning",
        title: "",
        text:"Fields mandatory not fill"})
    }else{
      this.service.salveItem(this.holder).subscribe(response => {
        if(response.status == 201){
          Swal.fire({icon: "success", title: "", text:"Holder updated with success"});
          this.goTolist()
        }
      })
    }
  }

  goTolist(){
    this.router.navigate(["index"])
  }

  initForm(){
    this.form = this.formBuilder.group({
      title : [
        '',
        Validators.required,
      ],
      body : [
        '',
        Validators.required,
      ],
      id : [
        0,
        Validators.required,
      ],
      userId : [
        0,
        Validators.required,
      ]
    });
  }

  ngOnInit(): void {

      if(this.params && this.params.extras) {
        this.form = this.formBuilder.group({
          title : [
            this.params.extras.title,
            Validators.required,
          ],
          body : [
            this.params.extras.body,
            Validators.required,
          ],
          id : [
            this.params.extras.id,
            Validators.required,
          ],
          userId : [
            this.params.extras.userId,
            Validators.required,
          ]
        });
        this.holder.id = this.params.extras.id;
        this.holder.userId = this.params.extras.userId;
        this.holder.title = this.params.extras.title;
        this.holder.body = this.params.extras.body;
      }
  }

  private clearValidations() {
    this.form.get("title")?.clearValidators();
    this.form.get("title")?.updateValueAndValidity();
    this.form.get("body")?.clearValidators();
    this.form.get("body")?.updateValueAndValidity();
  }

}
