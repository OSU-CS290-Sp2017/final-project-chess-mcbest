webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_member_component__ = __webpack_require__("./src/app/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chess_game_chess_game_component__ = __webpack_require__("./src/app/chess-game/chess-game.component.ts");
/* unused harmony export appROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appROUTES = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'member', component: __WEBPACK_IMPORTED_MODULE_3__member_member_component__["a" /* MemberComponent */] },
    { path: 'play-game', component: __WEBPACK_IMPORTED_MODULE_4__chess_game_chess_game_component__["a" /* ChessGameComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".decoTextContainer {\r\n\t\r\n}\r\n\r\n.decoText {\r\n    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1 class=\"site-title\">{{title}}</h1>\n  <h2>{{userName}}</h2>\n</div>\n<div class=\"body\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(u, db) {
        var _this = this;
        this.u = u;
        this.db = db;
        this.title = 'Chess McBest';
        this.user = u.getUser();
        this.user.subscribe(function (uid) {
            if (uid != null) {
                db.object("onlineUsers/" + uid + "/username", { preserveSnapshot: true }).subscribe(function (snap) {
                    _this.userName = snap.val();
                });
            }
        });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__member_member_component__ = __webpack_require__("./src/app/member/member.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_game_menu_new_game_menu_component__ = __webpack_require__("./src/app/new-game-menu/new-game-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__ = __webpack_require__("./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chess_game_chess_game_component__ = __webpack_require__("./src/app/chess-game/chess-game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__board_board_component__ = __webpack_require__("./src/app/board/board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pieces_pieces_component__ = __webpack_require__("./src/app/pieces/pieces.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__inquire_user_service__ = __webpack_require__("./src/app/inquire-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__game_host_service__ = __webpack_require__("./src/app/game-host.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//Routing


//angularFire



//Components








//Services



var config = {
    apiKey: "AIzaSyCdU1NI-u0zp0Sl5f1mWkEP5WLAet_CHKY",
    authDomain: "chess-mcbest.firebaseapp.com",
    databaseURL: "https://chess-mcbest.firebaseio.com",
    projectId: "chess-mcbest",
    storageBucket: "chess-mcbest.appspot.com",
    messagingSenderId: "474366902589"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__member_member_component__["a" /* MemberComponent */],
            __WEBPACK_IMPORTED_MODULE_10__new_game_menu_new_game_menu_component__["a" /* NewGameMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_11__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__chess_game_chess_game_component__["a" /* ChessGameComponent */],
            __WEBPACK_IMPORTED_MODULE_13__board_board_component__["a" /* BoardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pieces_pieces_component__["a" /* PiecesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(config, 'my-app'),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_15__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_16__inquire_user_service__["a" /* InquireUserService */],
            __WEBPACK_IMPORTED_MODULE_17__game_host_service__["a" /* GameHostService */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/board/board.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".board{\n    position: absolute;\n    width: calc(100vh - 10px);\n    height: calc(100vh - 10px);\n    /*max-width: 600px;*/\n    min-width: 120px;\n    /*max-height: 600px;*/\n    min-height: 120px;\n    /*background-image: url('../../assets/images/chess/board.png');\n    background-size: 100% auto;\n    background-repeat: no-repeat;*/\n\n    /*padding: 3.5% 3.7% 3.5% 3.7%;*/\n}\n.board img{\n    position: absolute;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n}\n\n.pieces-container{\n    width: 89.13%;\n    height: 89.13%;\n    top: 5.43%;\n    right: 5.43%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-flow: wrap;\n        flex-flow: wrap;\n    position: absolute;\n}\napp-pieces{\n    width: 12.5%;\n    height: 12.5%;\n    margin: 0;\n }\napp-pieces:active{\n\tcursor: -webkit-grabbing;\n\tcursor: grabbing;\n}\n\n @media screen and (min-width: 470px) {\n    app-pieces{\n     width: 12.5%;\n     height: 12.5%;\n    }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/board/board.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"board\">\n  <img src=\"../../assets/images/chess/board.png\" alt=\"\">\n  <div class=\"pieces-container\">\n    <app-pieces *ngFor=\"let piece of pieces; let i = index\" [imgSource]=\"piece\" [id]=\"i\" (idOut)=\"onPieceToggle($event)\"></app-pieces>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoardComponent = (function () {
    function BoardComponent(db) {
        this.db = db;
    }
    Object.defineProperty(BoardComponent.prototype, "setGameObservable", {
        set: function (hostUid) {
            //get the key for the game in the database that this game is referencing, then set an observable to see changes game on database
            this.hostUid = hostUid;
        },
        enumerable: true,
        configurable: true
    });
    BoardComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            //this.hostUid = cur;
            console.log("current value " + chng.currentValue);
            this.hostUid = chng.currentValue;
            var prev = JSON.stringify(chng.previousValue);
        }
        if (this.hostUid != null) {
            this.gameObservable = this.db.object('activeGames/' + this.hostUid, { preserveSnapshot: true });
            this.gameObservable.subscribe(function (snap) {
                if (snap.val() != null) {
                    _this.fenPieces = snap.val().board;
                    _this.structureBoard();
                }
            });
        }
    };
    BoardComponent.prototype.onPieceToggle = function (event) {
        this.move(event);
    };
    BoardComponent.prototype.structureBoard = function () {
        if (this.fenPieces != null) {
            this.setPiecesFromFen();
            this.getTurn();
        }
    };
    BoardComponent.prototype.getTurn = function () {
        this.turn = this.fenPieces[this.fenPieces.indexOf(' ') + 1];
    };
    BoardComponent.prototype.setPiecesFromFen = function () {
        var i = 0;
        var k = 0;
        var color;
        var piece;
        var pieces = [];
        function getNum(num) {
            if (isNaN(num)) {
                return 0;
            }
            else {
                return num;
            }
        }
        function getColor(piece) {
            if (piece.toUpperCase() == piece) {
                return 'w';
            }
            else {
                return 'b';
            }
        }
        for (i; i < this.fenPieces.length; i++) {
            if (this.fenPieces[i] == ' ') {
                break;
            }
            if (this.fenPieces[i] != '/') {
                if (getNum(this.fenPieces[i])) {
                    var l = 0;
                    for (l; l < getNum(this.fenPieces[i]); l++) {
                        pieces.push('bl');
                    }
                }
                else {
                    color = getColor(this.fenPieces[i]);
                    piece = this.fenPieces[i].toLowerCase();
                    pieces.push(piece + color);
                }
            }
        }
        this.pieces = pieces;
    };
    BoardComponent.prototype.move = function (id) {
        function getAlgebraic(id) {
            function getLetter(id) {
                switch (id % 8) {
                    case 0:
                        return 'a';
                    case 1:
                        return 'b';
                    case 2:
                        return 'c';
                    case 3:
                        return 'd';
                    case 4:
                        return 'e';
                    case 5:
                        return 'f';
                    case 6:
                        return 'g';
                    case 7:
                        return 'h';
                }
            }
            return getLetter(id) + Math.abs(Math.floor(id / 8) - 8);
        }
        console.log(id);
        if (this.selectedPiece == null) {
            if (this.pieces[id] != 'bl' && this.pieces[id][1] == this.turn) {
                this.selectedPiece = id;
                this.pieces[id] += 'h';
            }
        }
        else {
            console.log("Algebraic first: " + getAlgebraic(this.selectedPiece) + ", second " + getAlgebraic(id));
            this.db.list('activeGames/')
                .update(this.hostUid, {
                move: {
                    from: getAlgebraic(this.selectedPiece),
                    to: getAlgebraic(id)
                },
                functions: "untouched"
            });
            //this.pieces[id] = this.pieces[this.selectedPiece];
            //this.pieces[this.selectedPiece] = 'bl';
            this.selectedPiece = null;
        }
    };
    BoardComponent.prototype.addHighlights = function () {
        /*
        if (this.mm.getPossibleMoves() == null) return;
        var i;
        for(i = 0; i < this.mm.getPossibleMoves().length; i ++){
          this.pieces[this.mm.getPossibleMoves()[i]][0] += 'h';
        }
        */
    };
    BoardComponent.prototype.removeHighlights = function () {
        /*
        if (this.mm.getPossibleMoves() == null) return;
        var i;
        for(i = 0; i < this.mm.getPossibleMoves().length; i++){
          this.pieces[this.mm.getPossibleMoves()[i]][0] = this.pieces[this.mm.getPossibleMoves()[i]][0].substring(0, this.pieces[this.mm.getPossibleMoves()[i]][0].length - 1);
        }
        */
    };
    return BoardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BoardComponent.prototype, "setGameObservable", null);
BoardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-board',
        template: __webpack_require__("./src/app/board/board.component.html"),
        styles: [__webpack_require__("./src/app/board/board.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], BoardComponent);

var _a;
//# sourceMappingURL=board.component.js.map

/***/ }),

/***/ "./src/app/chess-game/chess-game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidebox{\n  font-family: 'Cormorant SC';\n  border: 5px solid #722f37;\n  background: white;\n  cursor: pointer;\n  border-radius: 25px;\n  font-size: 40px;\n  font-weight:400;\n  color: #722f37;\n  outline: none;\n  margin: 0;\n  margin-left: 10px;\n  margin-top: 10px;\n  padding: 20px;\n  width: 250px;\n  text-align: center;\n\n}\n\n button:focus{\n   outline: none;\n }\n\nbutton:hover{\n  color: white;\n  background-color: #722f37;\n}\n\n.waitingb{\n  font-family: cursive 'Cormorant SC';\n  font-size: 40px;\n  font-weight:400;\n  color: white;\n  background: #991212;\n  outline: none;\n  margin: 0;\n  margin-left: 10px;\n  border-radius: 25px;\n  border: 5px solid #722f37;\n  padding: 20px;\n  width: 200px;\n  text-align: center;\n}\n\n.waitingg{\n  font-family: cursive 'Cormorant SC';\n  right: 10px;\n  top: 5px;\n  font-size: 40px;\n  font-weight:400;\n  color: white;\n  background: #0a6624;\n  outline: none;\n  margin: 0;\n  margin-left: 10px;\n  border-radius: 25px;\n  border: 5px solid #722f37;\n  padding: 20px;\n  width: 200px;\n  text-align: center;\n}\n\n.contentContainer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    width: 100%;\n    height: 100%;\n}\n.buttonContainer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.boardContainer{\n    border: 5px solid #722f37;\n    height: calc(100vh - 10px);\n    width: calc(100vh - 10px);\n}\napp-board{\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/chess-game/chess-game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"contentContainer\">\n    <div class = \"boardContainer\">\n        <app-board [setGameObservable]=\"hostUidService | async\"></app-board>\n    </div>\n    <div class = \"buttonContainer\">\n        <div>\n            <div *ngIf=\"guest == 'waiting'\">\n                <h1 class = \"waitingg\"> Waiting...</h1>\n            </div>\n            <div *ngIf=\"guest == null\">\n                <h1 class = \"waitingb\"> Guest State is null</h1>\n            </div>\n        </div>\n        <div class = \"helpContainer\">\n            <p>Help text goes here.</p>\n        </div>\n        <button class = \"sidebox\" *ngIf=\"guest == 'waiting'\" (click)=\"cancelGameProposal()\">cancel</button>\n        <button class = \"sidebox\" (click)=\"cancelGameProposal()\">cancel temp</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/chess-game/chess-game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inquire_user_service__ = __webpack_require__("./src/app/inquire-user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__game_host_service__ = __webpack_require__("./src/app/game-host.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChessGameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChessGameComponent = (function () {
    function ChessGameComponent(userService, inquireUserService, hostService, db, afAuth, router) {
        var _this = this;
        this.userService = userService;
        this.inquireUserService = inquireUserService;
        this.hostService = hostService;
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        this.hostUid = 'temp';
        //go to login if not logged in
        afAuth.authState.subscribe(function (auth) {
            if (auth == null) {
                router.navigateByUrl('/login');
            }
        });
        //get Users uid
        userService.getUser().subscribe(function (uid) {
            _this.myUid = uid;
        });
        //get Inquired uid
        inquireUserService.getUser().subscribe(function (uid) {
            _this.opUid = uid;
        });
        //get Host uid
        if (this.myUid == null) {
            this.getMyKey(); //also sets states if need be
        }
        else {
            this.setStates();
        }
        //set host service
        this.hostUidService = hostService.getHost();
    }
    ChessGameComponent.prototype.cancelGameProposal = function () {
        var _this = this;
        if (this.myUid != null && this.hostUid != null) {
            this.db.list('onlineUsers/').update(this.myUid, { in_game: "Not in Game" });
            this.db.list('activeGames/' + this.hostUid).remove();
            this.router.navigateByUrl('/member');
        }
        else if (this.hostUid == null) {
            this.db.object('onlineUsers/' + this.myUid + '/host', { preserveSnapshot: true }).subscribe(function (snap) {
                if (snap.val() == "true") {
                    _this.hostUid = _this.myUid;
                }
                else {
                    _this.hostUid = _this.opUid;
                }
                _this.cancelGameProposal();
            });
        }
    };
    ChessGameComponent.prototype.getMyKey = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            _this.userService.setUser(user.uid);
            _this.userService.getUser().subscribe(function (uid) {
                _this.myUid = uid;
                if (_this.hostState == null) {
                    _this.setStates();
                }
            });
        });
    };
    ChessGameComponent.prototype.setStates = function () {
        var _this = this;
        this.hostState = this.db.object('onlineUsers/' + this.myUid + '/host', { preserveSnapshot: true });
        this.hostState.subscribe(function (state) {
            if (state.val() == "true") {
                _this.hostUid = _this.myUid;
            }
            else {
                _this.hostUid = _this.opUid;
            }
            if (_this.hostUid != null) {
                _this.hostService.setInquireHost(_this.hostUid);
            }
            _this.gameState = _this.db.object('activeGames/' + _this.hostUid, { preserveSnapshot: true });
            _this.gameState.subscribe(function (snap) {
                if (snap.val() != null) {
                    _this.guest = snap.val().guest;
                    /* check for game over */
                    if (snap.val().gameOver == 'true') {
                        alert('game is over');
                        _this.cancelGameProposal();
                    }
                }
            });
        });
    };
    return ChessGameComponent;
}());
ChessGameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-chess-game',
        template: __webpack_require__("./src/app/chess-game/chess-game.component.html"),
        styles: [__webpack_require__("./src/app/chess-game/chess-game.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__inquire_user_service__["a" /* InquireUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__inquire_user_service__["a" /* InquireUserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__game_host_service__["a" /* GameHostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__game_host_service__["a" /* GameHostService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _f || Object])
], ChessGameComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=chess-game.component.js.map

/***/ }),

/***/ "./src/app/game-host.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameHostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GameHostService = (function () {
    function GameHostService() {
        this.host = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    GameHostService.prototype.setInquireHost = function (uid) {
        this.host.next(uid);
    };
    GameHostService.prototype.getHost = function () {
        return this.host.asObservable();
    };
    return GameHostService;
}());
GameHostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], GameHostService);

//# sourceMappingURL=game-host.service.js.map

/***/ }),

/***/ "./src/app/inquire-user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InquireUserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InquireUserService = (function () {
    function InquireUserService() {
        this.inquireUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    InquireUserService.prototype.setInquireUser = function (uid) {
        this.inquireUser.next(uid);
    };
    InquireUserService.prototype.getUser = function () {
        return this.inquireUser.asObservable();
    };
    return InquireUserService;
}());
InquireUserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], InquireUserService);

//# sourceMappingURL=inquire-user.service.js.map

/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contentContainer {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.decoTextContainer {\r\n    width: 40%;\r\n    margin: 5%;\r\n    word-wrap: break-word;\r\n    margin: 0;\r\n}\r\n\r\n.decoText {\r\n    font-family: 'Amatic SC';\r\n    font-size: 60px;\r\n    margin: 0;\r\n}\r\n\r\n.authorContainer{\r\n  position: fixed;\r\n  bottom: 10px;\r\n  left: 25%;\r\n}\r\nh2{\r\n  font-family: 'Cormorant SC';\r\n  font-size: 30px;\r\n}\r\nh3{\r\n  font-family: 'Cormorant SC';\r\n  font-size: 20px;\r\n}\r\n\r\n.loginContainer {\r\n    width: 40%;\r\n    margin: 5%;\r\n}\r\n\r\n.login-button {\r\n    font-family: 'Cormorant SC';\r\n    font-size: 60px;\r\n    text-align: center;\r\n    margin: -5px;\r\n    border-radius: 4px;\r\n    border: 5px solid #722f37;\r\n    background-color: white;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.login-button:hover {\r\n    color: white;\r\n    background-color: #722f37;\r\n}\r\n\r\n.login-button:focus {\r\n    outline: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"contentContainer\">\n\n<div class=\"loginContainer\">\n  <button class=\"login-button\"(click)=\"loginWithGoogle()\">Find Me A Game!</button>\n</div>\n\n<div class=\"decoTextContainer\">\n    <p class = \"decoText\"> \"A computer once beat me at chess, but it was no match for me at kick boxing.\" <br> -Emo Phillips </p>\n</div>\n\n</div>\n<div class=\"authorContainer\">\n  <h2 class = \"creatorText\"> Creator: William Frederick Wodrich</h2>\n  <h3 class = \"contributorText\"> Contributors: Sam Young - Ethan K Swift - Kyle Baldes</h3>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("./node_modules/firebase/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var LoginComponent = (function () {
    function LoginComponent(firebaseApp, afAuth, router, userService) {
        this.afAuth = afAuth;
        this.router = router;
        this.userService = userService;
        this.db = firebaseApp.database();
        afAuth.authState.subscribe(function (auth) {
            if (auth != null) {
                router.navigateByUrl('/member');
            }
        });
    }
    LoginComponent.prototype.loginWithGoogle = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider());
        this.afAuth.auth.onAuthStateChanged(function (auth) {
            if (auth != null) {
                //update to All Users on Firebase db
                _this.db.ref('allUsers/' + auth.uid).update({
                    username: auth.displayName,
                    email: auth.email,
                    profile_picture: auth.photoURL
                });
                //update to Online Users on Firebase db
                _this.db.ref('onlineUsers/' + auth.uid).update({
                    username: auth.displayName,
                    email: auth.email,
                    profile_picture: auth.photoURL,
                    in_game: "Not in a game"
                });
                _this.userService.setUser(auth.uid);
                _this.router.navigateByUrl('/member');
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("./src/app/login/login.component.html"),
        styles: [__webpack_require__("./src/app/login/login.component.css")],
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2_angularfire2__["b" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = ((_b = (typeof __WEBPACK_IMPORTED_MODULE_3_firebase_app__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_firebase_app__).app) && _b).App) === "function" && _a || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _e || Object])
], LoginComponent);

var _b, _a, _c, _d, _e;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "./src/app/member/member.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    height: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n}\n\n.contentContainer {\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\nbutton{\n  display: block;\n  font-family: 'Cormorant SC';\n  text-align: center;\n  font-size: 24px;\n  border: 5px solid #722f37;\n  border-left: 0;\n  background: white;\n  cursor: pointer;\n  outline: none;\n  /*border-radius: 25px;*/\n  padding: 20px;\n  width: 100%;\n  height: calc(33.3333% + 5px);\n  margin-top: -5px;\n\n}\n\n button:focus{\n   outline: none;\n }\n\nbutton:hover{\n  color: white;\n  background-color: #722f37;\n}\nstrong{\n  font-family: 'Cormorant SC';\n  font-weight: bold;\n  font-size: 20px;\n}\n\nstrong:hover{\n\tcolor: #722f37;\n\tcursor: pointer;\n}\n\nul{\n  list-style-type: none;\n}\nli{\n  font-size: 20px;\n\n\n}\nli:hover{\n\tcursor: pointer;\n\tcolor: #722f37;\n}\n\n.onlineUsers{\n    display: inline-block;\n    margin: 0;\n    padding: 0;\n    margin-top: -5px;\n    padding-right: 5%;\n    width: 60%;\n    border: 5px solid #722f37;\n    background: #ffb6c1;\n }\n\n.playerList{\n    display: inline-block;\n    border-color: darkgrey;\n    border: 2px solid white;\n    padding: 5px;\n    width: 100%;\n    margin-top: -2px;\n    height: auto;\n}\n\n.playerStatusText{\n    float: right;\n    display: inline;\n    margin: 0;\n    padding: 0;\n    text-align: right;\n}\n\n.buttonBox{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-flex: 1;\n        -ms-flex-positive: 1;\n            flex-grow: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-flow: column;\n            flex-flow: column;\n    float: right;\n    width: 30%;\n    background-color: lightgrey;\n    margin-left: -5px;\n    border-left:  5px solid #722f37;\n}\n\nh3{\n\tcursor: default;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/member/member.component.html":
/***/ (function(module, exports) {

module.exports = "<div class= \"background\">\n<div class = \"contentContainer\">\n<div class=\"onlineUsers\">\n  <ul>\n    <h3> Players Available: </h3>\n    <li *ngFor=\"let user of onlineUsers | async\" (click)=\"inquireUser(user.$key)\">\n      <div class = \"playerList\"> <strong>{{user.username}}: </strong>\n        <p class = \"playerStatusText\">{{user.in_game}}</p>\n    </div>\n    </li>\n  </ul>\n</div>\n<div class = \"buttonBox\">\n    <button (click)=\"newGame()\">Online Game</button>\n    <button (click)=\"newGame()\">Offline Game</button>\n    <button (click)=\"logout()\">Logout</button>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/member/member.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__("./src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inquire_user_service__ = __webpack_require__("./src/app/inquire-user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//services


var MemberComponent = (function () {
    function MemberComponent(userService, inquireUserService, db, afAuth, router) {
        var _this = this;
        this.userService = userService;
        this.inquireUserService = inquireUserService;
        this.db = db;
        this.afAuth = afAuth;
        this.router = router;
        //go to login if not logged in
        afAuth.authState.subscribe(function (auth) {
            if (auth == null) {
                router.navigateByUrl('/login');
            }
        });
        this.onlineUsers = db.list('onlineUsers/');
        userService.getUser().subscribe(function (uid) {
            _this.uid = uid;
        });
        this.inGame = db.list('activegames/' + this.uid);
    }
    MemberComponent.prototype.inquireUser = function (userkey) {
        var _this = this;
        if (this.uid != null) {
            if (this.uid != userkey) {
                this.inquireUserService.setInquireUser(userkey);
                this.db.object('onlineUsers/' + userkey + '/in_game', { preserveSnapshot: true }).subscribe(function (status) {
                    if (status.val() === "Click to Join" || status.val() === "In Game") {
                        //update database and route to chessgame player component
                        _this.db.list('onlineUsers/').update(userkey, { in_game: "In Game" });
                        _this.db.list('onlineUsers/').update(_this.uid, { in_game: "In Game" });
                        _this.db.list('activeGames/').update(userkey, { guest: _this.uid });
                        _this.router.navigateByUrl('/play-game');
                    }
                });
            }
            else {
                console.log('we are same');
            }
        }
        else {
            this.getMyKey(this.inquireUser, userkey);
        }
    };
    //Buttons!!!
    MemberComponent.prototype.newGame = function () {
        if (this.uid != null) {
            this.db.list('onlineUsers/').update(this.uid, { in_game: "Click to Join", host: "true" }); //set user to "in game" on onlineUsers db
            this.db.list('activeGames/').update(this.uid, { guest: "waiting", functions: "untouched" });
            this.router.navigateByUrl('/play-game');
        }
        else {
            this.getMyKey(this.newGame, null);
        }
    };
    MemberComponent.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut();
        this.userService.getUser().subscribe(function (x) { return _this.uid = x; });
        if (this.uid != null) {
            this.onlineUsers.remove(this.uid);
        }
        this.userService.setUser(null);
        this.router.navigateByUrl('/login');
    };
    MemberComponent.prototype.getMyKey = function (followUpFunc, parameters) {
        var _this = this;
        if (this.uid == null) {
            this.afAuth.authState.subscribe(function (user) {
                _this.userService.setUser(user.uid);
                _this.userService.getUser().subscribe(function (uid) {
                    _this.uid = uid;
                    if (parameters != null) {
                        followUpFunc(parameters);
                    }
                    else {
                        followUpFunc();
                    }
                });
            });
        }
    };
    return MemberComponent;
}());
MemberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-member',
        template: __webpack_require__("./src/app/member/member.component.html"),
        styles: [__webpack_require__("./src/app/member/member.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__inquire_user_service__["a" /* InquireUserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__inquire_user_service__["a" /* InquireUserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _e || Object])
], MemberComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=member.component.js.map

/***/ }),

/***/ "./src/app/new-game-menu/new-game-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/new-game-menu/new-game-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  new-game-menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/new-game-menu/new-game-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewGameMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewGameMenuComponent = (function () {
    function NewGameMenuComponent() {
    }
    NewGameMenuComponent.prototype.ngOnInit = function () {
    };
    return NewGameMenuComponent;
}());
NewGameMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-new-game-menu',
        template: __webpack_require__("./src/app/new-game-menu/new-game-menu.component.html"),
        styles: [__webpack_require__("./src/app/new-game-menu/new-game-menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NewGameMenuComponent);

//# sourceMappingURL=new-game-menu.component.js.map

/***/ }),

/***/ "./src/app/pieces/pieces.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".piece{\n    margin: 0;\n    padding: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/pieces/pieces.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"piece\" (click)=\"toggle()\" [innerHTML]=\"cleanImgTag\"></div>\n"

/***/ }),

/***/ "./src/app/pieces/pieces.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiecesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PiecesComponent = (function () {
    function PiecesComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.imageSource = "../../assets/images/chess/";
        this.idOut = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    Object.defineProperty(PiecesComponent.prototype, "imgSource", {
        set: function (piece) {
            this.piece = piece;
            this.genTag();
        },
        enumerable: true,
        configurable: true
    });
    PiecesComponent.prototype.toggle = function () {
        this.genTag();
        this.idOut.next(this.id);
    };
    PiecesComponent.prototype.genTag = function () {
        this.imgTag = '<img src="' + this.imageSource + this.piece + '.png" width="100%">';
        this.cleanImgTag = this.sanitizer.bypassSecurityTrustHtml(this.imgTag);
    };
    return PiecesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PiecesComponent.prototype, "imgSource", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Input */])(),
    __metadata("design:type", Number)
], PiecesComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]) === "function" && _a || Object)
], PiecesComponent.prototype, "idOut", void 0);
PiecesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-pieces',
        template: __webpack_require__("./src/app/pieces/pieces.component.html"),
        styles: [__webpack_require__("./src/app/pieces/pieces.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], PiecesComponent);

var _a, _b;
//# sourceMappingURL=pieces.component.js.map

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "strong{\n  font-family: 'Cormorant SC';\n  font-weight: bold;\n  font-size: 20px;\n}\n\nstrong:hover{\n\tcolor: #722f37;\n\tcursor: pointer;\n}\n\nul{\n  list-style-type: none;\n}\nli{\n  font-size: 20px;\n\n\n}\nli:hover{\n\tcursor: pointer;\n\tcolor: #722f37;\n}\n\ndiv{\n    margin-top: 20px;\n    max-width: inherit;\n    border: 40px solid lightgrey;\n    margin: 10px;\n    border-radius: 25px;\n    padding: 20px;\n    background: #ffb6c1;\n    height: inherit;\n }\nh3{\n\tcursor: default;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> User Profiles </h1>\n<div class=\"online-users\">\n  <ul>\n    <h3> Which user profile do you want to see? </h3>\n    <li *ngFor=\"let user of onlineUsers | async\" (click)=\"inquireUser(user.$key)\">\n      <strong>{{user.username}}: </strong>{{user.in_game}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-user-profile',
        template: __webpack_require__("./src/app/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("./src/app/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserProfileComponent);

//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserService = (function () {
    function UserService() {
        this.login = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    UserService.prototype.setUser = function (user) {
        this.login.next(user);
    };
    UserService.prototype.getUser = function () {
        return this.login.asObservable();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])()
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map