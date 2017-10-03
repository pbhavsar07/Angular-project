// import everything from firebase
import * as firebase from 'firebase';
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService
{

    token: string;
   
   constructor(private router: Router){}
    signupUser(email: string,password: string)
    {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .catch(
            error => console.log(error)
        )
    }
    signinUser(email: string,password: string)
    {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(// we could return the promise , then block returns a promise i.e handles successful response and catch block returns errors i.e handles Errors
            response => { 
                this.router.navigate(['/']);// if properly authenticated i.e Signed in redirect to home page
                firebase.auth().currentUser.getToken()
                .then(
                    (token: string) => this.token = token
                )

             }
        )
        .catch(
            error => { console.log(error); }
        );
    }

    getToken()
    {
        // returning a promise //Aysnchronous action
        // it not only checks(firebase) the user id and password from local database but also checks the validity of that token
        firebase.auth().currentUser.getToken()
        .then(
                    (token: string) => this.token = token
                );
        return this.token;

    }

    isAuthenticated()
    { //rertunr true when token is not null like it is present
        return this.token!=null;
    }
    logout()
    {
        firebase.auth().signOut();
        this.token = null;
    }

}