import { Component, OnInit } from '@angular/core';
import {HolderService} from "../../domain/service/holder.service";
import {Holder} from "../../domain/model/holder";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import Swal from "sweetalert2";

@Component({
  selector: 'app-save-view',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements  OnInit{


  private holder: Holder = new Holder();
  public form: FormGroup = new FormGroup({
                                title: new FormControl(),
                                body: new FormControl()});

  constructor(private service: HolderService, private router: Router, private formBuilder: FormBuilder) {
  }

  saveItem(){

    this.holder.userId = 1
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
          Swal.fire({icon: "success",
            title: "",
            text:"Holder created with success"});
          this.initForm();
          this.clearValidations()

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
      ]
    });
  }

  ngOnInit(): void {
    this.initForm();
  }

  private clearValidations() {
    this.form.get("title")?.clearValidators();
    this.form.get("title")?.updateValueAndValidity();
    this.form.get("body")?.clearValidators();
    this.form.get("body")?.updateValueAndValidity();
  }

}
