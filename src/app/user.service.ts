import { Injectable } from '@angular/core';
import { User } from './user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser!: User;
  Users!: User[];
  
  constructor(private http:HttpClient) {
    this.selectedUser = new User();
  }

  UsersPicture(){
    let url = "https://randomuser.me/api/?results=1"
    return this.http.get(url);
  }

  getUsers(){
    return this.http.get(`https://cred-app-mean-backend.herokuapp.com`)
  }

  postUsers(user: User){
    return this.http.post(`https://cred-app-mean-backend.herokuapp.com`, user) 
  }

  putUsers(user: User){
    return this.http.put(`https://cred-app-mean-backend.herokuapp.com/${user._id}`, user) 
  }

  deleteUsers(_id:string){
    return this.http.delete(`https://cred-app-mean-backend.herokuapp.com/${_id}`)
  }
  
}
