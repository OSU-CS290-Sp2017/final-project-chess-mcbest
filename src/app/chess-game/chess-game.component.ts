import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { FirebaseListObservable, AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database'
import { FirebaseApp } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

import { UserService } from './../user.service';
import { InquireUserService } from './../inquire-user.service';
import { GameHostService } from './../game-host.service';

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.css']
})
export class ChessGameComponent {
  private myUid: string;
  private opUid: string;
  private hostUid: string = 'temp';
  private hostUidService: Observable<string>
  private game: any;
  private guest: string;
  private hostState: FirebaseObjectObservable<any>;
  private gameState: FirebaseObjectObservable<any>;

  constructor(private userService: UserService, private inquireUserService: InquireUserService,
    private hostService: GameHostService, private db: AngularFireDatabase,
    public afAuth: AngularFireAuth, private router: Router) {
    //go to login if not logged in
    afAuth.authState.subscribe(auth => {
      if (auth == null) {
        router.navigateByUrl('/login');
      }
    });

    //get Users uid
    userService.getUser().subscribe(uid => {
      this.myUid = uid;
    });
    //get Inquired uid
    inquireUserService.getUser().subscribe(uid => {
      this.opUid = uid;
    });
    //get Host uid
    if (this.myUid == null) {
      this.getMyKey();//also sets states if need be
    } else {
      this.setStates();
    }
    //set host service
    this.hostUidService = hostService.getHost();
  }

  cancelGameProposal(): void {
    if (this.myUid != null && this.hostUid != null) {
      this.db.list('onlineUsers/').update(this.myUid, { in_game: "Not in Game" });
      this.db.list('activeGames/' + this.hostUid).remove();
      this.router.navigateByUrl('/member')
    } else if (this.hostUid == null) {
      this.db.object('onlineUsers/' + this.myUid + '/host', { preserveSnapshot: true }).subscribe(snap => {
        if (snap.val() == "true") {
          this.hostUid = this.myUid;
        } else {
          this.hostUid = this.opUid;
        }
        this.cancelGameProposal();
      });
    }
  }
  getMyKey() {
    this.afAuth.authState.subscribe(user => {
      this.userService.setUser(user.uid);
      this.userService.getUser().subscribe(uid => {
        this.myUid = uid;
        if (this.hostState == null) {
          this.setStates();
        }
      });
    });
  }
  setStates() {
    this.hostState = this.db.object('onlineUsers/' + this.myUid + '/host', { preserveSnapshot: true });
    this.hostState.subscribe(state => {
      if (state.val() == "true") {
        this.hostUid = this.myUid;
      } else {
        this.hostUid = this.opUid;
      }
      if (this.hostUid != null) {
        this.hostService.setInquireHost(this.hostUid);
      }
      this.gameState = this.db.object('activeGames/' + this.hostUid, { preserveSnapshot: true });
      this.gameState.subscribe(snap => {
        if (snap.val() != null) {
          this.guest = snap.val().guest;
          /* check for game over */
          if (snap.val().gameOver == 'true') {
            alert('game is over');
            this.cancelGameProposal();
          }
        }
      });
    });
  }
}
