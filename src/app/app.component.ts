import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';
import { User } from './user';
import {UserService } from './user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  closeResult = '';
  document!:any;
  submitted = false;
  myform: any;
  picture:any;
  data: any;
  UserData:any;


  constructor(
    public userService: UserService,
    private modalService: NgbModal,
    private toastr: ToastrService,
  ) {}

  

  ngOnInit() {
    this.getUsers();
    this.getUsersPicture();
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }



  getUsersPicture(){
    this.userService.UsersPicture()
    .subscribe((res: any)=> {
     this.data = res;
    });
  }


  getUsers(){
    this.userService.getUsers()
    .subscribe((res)=> {
      this.UserData = this.userService.Users;
      this.UserData = res as User[]
    })
  };

  postUsers(form:NgForm) {
    if(form.value._id){
      this.userService.putUsers(form.value)
      .subscribe((res)=> {
        this.toastr.success('Row Updated successfully');
        this.getUsers()
        this.userService.selectedUser = new User();
      })
    }
    else {
      this.userService.postUsers(form.value)
      .subscribe((res)=> {
        this.toastr.success('Row Added successfully');
        this.getUsers()
        this.userService.selectedUser = new User()
      })
    }
  };


  editUser(user:User){
    this.userService.selectedUser = user;
  }
  

  deleteUsers(_id: string){
    alert("Are you sure you want to delete this item?")
    this.userService.deleteUsers(_id)
    .subscribe((res)=> {
      this.toastr.warning('Row Deleted!');
      window.location.reload();
      this.getUsers()
      this.userService.selectedUser = new User()
    })
  } 
  
}

