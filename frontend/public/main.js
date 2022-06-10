(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



const routes = [
    {
        path: 'home',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/core.module */ 294);
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ 3467);
/* harmony import */ var _songs_songs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./songs/songs.module */ 8202);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 4466);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__.CoreModule,
            _home_home_module__WEBPACK_IMPORTED_MODULE_3__.HomePageModule,
            _songs_songs_module__WEBPACK_IMPORTED_MODULE_4__.SongsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicRouteStrategy }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _song_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song.service */ 6289);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);





let CoreModule = class CoreModule {
};
CoreModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClientModule],
        providers: [_song_service__WEBPACK_IMPORTED_MODULE_0__.SongService],
    })
], CoreModule);



/***/ }),

/***/ 6289:
/*!**************************************!*\
  !*** ./src/app/core/song.service.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongService": () => (/* binding */ SongService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6587);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);





let SongService = class SongService {
    //private songsUrl = 'https://localhost:8000/songs';
    //private newSongUrl = 'https://localhost:8000/songs/new';
    constructor(http) {
        this.http = http;
        this.songsUrl = 'https://enigmatic-crag-23673.herokuapp.com/songs';
        this.newSongUrl = 'https://enigmatic-crag-23673.herokuapp.com/songs/new';
    }
    getSongs() {
        return this.http.get(this.songsUrl).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((data) => console.log(JSON.stringify(data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getMaxSongId() {
        return this.http.get(this.songsUrl).pipe(
        // Get max value from an array
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((data) => Math.max.apply(Math, data.map(function (o) {
            return o.id;
        }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    getSongById(id) {
        const url = `${this.songsUrl}/${id}`;
        return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((data) => console.log('getSong: ' + JSON.stringify(data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    createSong(song) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        song.id = 3;
        return this.http
            .post(this.newSongUrl, song, { headers: headers })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((data) => console.log('createSong: ' + JSON.stringify(data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    deleteSong(id) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.songsUrl}/${id}`;
        return this.http.delete(url, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)((data) => console.log('deleteSong: ' + id)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    updateSong(song) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/json' });
        const url = `${this.songsUrl}/${song.id}`;
        return this.http.put(url, song, { headers: headers }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.tap)(() => console.log('updateSong: ' + song.id)), 
        // Return the product on an update
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(() => song), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(errorMessage);
    }
};
SongService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient }
];
SongService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], SongService);



/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _songs_songs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../songs/songs.module */ 8202);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ 2003);








let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__.HomePageRoutingModule,
            _songs_songs_module__WEBPACK_IMPORTED_MODULE_1__.SongsModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 1670);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/song.service */ 6289);





let HomePage = class HomePage {
    constructor(songService) {
        this.songService = songService;
    }
    ionViewDidEnter() {
        this.songService.getSongs().subscribe((data) => {
            this.songs = data[0];
        });
    }
    ngOnInit() {
        this.songService.getSongs().subscribe((data) => {
            this.songs = data[0];
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _core_song_service__WEBPACK_IMPORTED_MODULE_2__.SongService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 6968);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 3489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 4696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.component.html?ngResource */ 9734);
/* harmony import */ var _navbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.css?ngResource */ 6370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/song.service */ 6289);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let NavbarComponent = class NavbarComponent {
    constructor(songService, router) {
        this.songService = songService;
        this.router = router;
    }
    ngOnInit() { }
    newSong() {
        // Get max product Id from the product list
        //this.songService.getMaxSongId().subscribe((data) => (this.id = data));
        //this.router.navigate(['/songs', this.id, 'new']);
        this.router.navigate(['/songs/new']);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _core_song_service__WEBPACK_IMPORTED_MODULE_2__.SongService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
NavbarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-navbar',
        template: _navbar_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_navbar_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavbarComponent);



/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 5227);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ 4696);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);







let SharedModule = class SharedModule {
};
SharedModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        ],
    })
], SharedModule);



/***/ }),

/***/ 4559:
/*!************************************************************!*\
  !*** ./src/app/songs/song-detail/song-detail.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongDetailComponent": () => (/* binding */ SongDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _song_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-detail.component.html?ngResource */ 6661);
/* harmony import */ var _song_detail_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-detail.component.css?ngResource */ 5440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/song.service */ 6289);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let SongDetailComponent = class SongDetailComponent {
    constructor(activatedroute, router, songService) {
        this.activatedroute = activatedroute;
        this.router = router;
        this.songService = songService;
        this.song = {
            id: 0,
            name: '',
            type: '',
            duration: '',
            singer: '',
            cover: '',
        };
        this.sngId = 0;
        this.isloading = true;
    }
    ngOnInit() {
        this.sngId = parseInt(this.activatedroute.snapshot.params['songId']);
        this.songService.getSongById(this.sngId).subscribe((data) => {
            this.isloading = true;
            this.song = data[0];
            this.isloading = false;
        });
    }
    goEdit() {
        this.router.navigate(['/songs', this.sngId, 'edit']);
    }
    onBack() {
        this.router.navigate(['']);
    }
};
SongDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _core_song_service__WEBPACK_IMPORTED_MODULE_2__.SongService }
];
SongDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-song-detail',
        template: _song_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_song_detail_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SongDetailComponent);



/***/ }),

/***/ 1394:
/*!********************************************************!*\
  !*** ./src/app/songs/song-edit/song-edit.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongEditComponent": () => (/* binding */ SongEditComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _song_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-edit.component.html?ngResource */ 9473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_song_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/song.service */ 6289);






let SongEditComponent = class SongEditComponent {
    constructor(fb, activatedroute, router, songService) {
        this.fb = fb;
        this.activatedroute = activatedroute;
        this.router = router;
        this.songService = songService;
        this.pageTitle = 'Song Edit';
        this.errorMessage = '';
        this.sngId = 0;
        this.song = {
            id: 0,
            name: '',
            type: '',
            duration: '',
            singer: '',
            cover: '',
        };
    }
    ngOnInit() {
        this.songForm = this.fb.group({
            name: '',
            type: '',
            duration: '',
            singer: '',
            cover: '',
        });
        // Read the product Id from the route parameter
        this.sngId = parseInt(this.activatedroute.snapshot.params['id']);
        this.getSong(this.sngId);
    }
    getSong(id) {
        this.songService.getSongById(id).subscribe((song) => this.displaySong(song[0]), (error) => (this.errorMessage = error));
    }
    displaySong(song) {
        if (this.songForm) {
            this.songForm.reset();
        }
        this.song = song[0];
        this.pageTitle = `Edit Song: ${this.song.name}`;
        // Update the data on the form
        this.songForm.patchValue({
            name: this.song.name,
            type: this.song.type,
            duration: this.song.duration,
            singer: this.song.singer,
            cover: this.song.cover,
        });
    }
    deleteSong() {
        if (this.song.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        }
        else {
            if (confirm(`Really delete the song: ${this.song.name}?`)) {
                this.songService.deleteSong(this.song.id).subscribe(() => this.onSaveComplete(), (error) => (this.errorMessage = error));
            }
        }
    }
    saveSong() {
        if (this.songForm.valid) {
            if (this.songForm.dirty) {
                this.song = this.songForm.value;
                this.song.id = this.sngId;
                this.songService.updateSong(this.song).subscribe(() => this.onSaveComplete(), (error) => (this.errorMessage = error));
            }
            else {
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete() {
        // Reset the form to clear the flags
        this.songForm.reset();
        this.router.navigate(['']);
    }
};
SongEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _core_song_service__WEBPACK_IMPORTED_MODULE_1__.SongService }
];
SongEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        template: _song_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
    })
], SongEditComponent);



/***/ }),

/***/ 398:
/*!********************************************************!*\
  !*** ./src/app/songs/song-item/song-item.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongItemComponent": () => (/* binding */ SongItemComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _song_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-item.component.html?ngResource */ 4082);
/* harmony import */ var _song_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-item.component.css?ngResource */ 9903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let SongItemComponent = class SongItemComponent {
    constructor() {
        this.song = {
            id: 0,
            name: '',
            type: '',
            duration: '',
            singer: '',
            cover: '',
        };
    }
};
SongItemComponent.propDecorators = {
    song: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
SongItemComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-song-item',
        template: _song_item_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_song_item_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SongItemComponent);



/***/ }),

/***/ 6301:
/*!******************************************************!*\
  !*** ./src/app/songs/song-new/song-new.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongNewComponent": () => (/* binding */ SongNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _song_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-new.component.html?ngResource */ 60);
/* harmony import */ var _song_new_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-new.component.css?ngResource */ 3501);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _core_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/song.service */ 6289);







let SongNewComponent = class SongNewComponent {
    constructor(fb, activatedroute, router, songService) {
        this.fb = fb;
        this.activatedroute = activatedroute;
        this.router = router;
        this.songService = songService;
        this.pageTitle = 'Song New';
        this.errorMessage = '';
        this.sngId = 0;
        this.song = {
            id: 0,
            name: '',
            type: '',
            duration: '',
            singer: '',
            cover: '',
        };
    }
    ngOnInit() {
        this.songForm = this.fb.group({
            name: '',
            type: '',
            duration: '',
            singer: '',
            cover: '',
        });
        // Read the product Id from the route parameter
        this.sngId = parseInt(this.activatedroute.snapshot.params['songId']);
    }
    //saveSong(): void {
    //if (this.songForm.valid) {
    //if (this.songForm.dirty) {
    //this.song = this.songForm.value;
    //this.song.id = this.sngId;
    //this.songService.createSong(this.song).subscribe(
    //() => this.onSaveComplete(),
    //(error: any) => (this.errorMessage = <any>error)
    //);
    //} else {
    //this.onSaveComplete();
    //}
    //} else {
    //this.errorMessage = 'Please correct the validation errors.';
    //}
    //}
    saveSong() {
        if (this.songForm.valid) {
            if (this.songForm.dirty) {
                this.song = this.songForm.value;
                this.songService.createSong(this.song).subscribe((data) => {
                    this.onSaveComplete();
                    this.song = data;
                    this.song.id = data.id + 1;
                }, (error) => (this.errorMessage = error));
            }
            else {
                this.onSaveComplete();
            }
        }
        else {
            this.errorMessage = 'Please correct the validation errors.';
        }
    }
    onSaveComplete() {
        // Reset the form to clear the flags
        this.songForm.reset();
        this.router.navigate(['']);
    }
};
SongNewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _core_song_service__WEBPACK_IMPORTED_MODULE_2__.SongService }
];
SongNewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-song-new',
        template: _song_new_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_song_new_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SongNewComponent);



/***/ }),

/***/ 5609:
/*!***********************************************!*\
  !*** ./src/app/songs/songs-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongsRoutingModule": () => (/* binding */ SongsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./song-detail/song-detail.component */ 4559);
/* harmony import */ var _song_edit_song_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-edit/song-edit.component */ 1394);
/* harmony import */ var _song_new_song_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./song-new/song-new.component */ 6301);






const routes = [
    { path: 'songs/new', component: _song_new_song_new_component__WEBPACK_IMPORTED_MODULE_2__.SongNewComponent },
    { path: 'songs/:songId', component: _song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_0__.SongDetailComponent },
    { path: 'songs/:id/edit', component: _song_edit_song_edit_component__WEBPACK_IMPORTED_MODULE_1__.SongEditComponent },
];
let SongsRoutingModule = class SongsRoutingModule {
};
SongsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    })
], SongsRoutingModule);



/***/ }),

/***/ 8202:
/*!***************************************!*\
  !*** ./src/app/songs/songs.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SongsModule": () => (/* binding */ SongsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _songs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./songs-routing.module */ 5609);
/* harmony import */ var _song_item_song_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./song-item/song-item.component */ 398);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _song_new_song_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./song-new/song-new.component */ 6301);
/* harmony import */ var _song_edit_song_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-edit/song-edit.component */ 1394);
/* harmony import */ var _song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./song-detail/song-detail.component */ 4559);









let SongsModule = class SongsModule {
};
SongsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _song_new_song_new_component__WEBPACK_IMPORTED_MODULE_3__.SongNewComponent,
            _song_item_song_item_component__WEBPACK_IMPORTED_MODULE_1__.SongItemComponent,
            _song_edit_song_edit_component__WEBPACK_IMPORTED_MODULE_4__.SongEditComponent,
            _song_detail_song_detail_component__WEBPACK_IMPORTED_MODULE_5__.SongDetailComponent,
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _songs_routing_module__WEBPACK_IMPORTED_MODULE_0__.SongsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule],
        exports: [_song_item_song_item_component__WEBPACK_IMPORTED_MODULE_1__.SongItemComponent],
    })
], SongsModule);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyB30C46S0mHE535s1ulxTihsAhR08Kptdg',
        authDomain: 'songsapp-d7719.firebaseapp.com',
        projectId: 'songsapp-d7719',
        storageBucket: 'songsapp-d7719.appspot.com',
        messagingSenderId: '817306475672',
        appId: '1:817306475672:web:c13fe82890a58c96fe84ed',
        measurementId: 'G-5FLELXS81W',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6370:
/*!***************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.css?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 5440:
/*!************************************************************************!*\
  !*** ./src/app/songs/song-detail/song-detail.component.css?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "figure {\n  margin-top: 1em;\n}\n\nh4 {\n  color: blue;\n}\n\nh5 {\n  color: brown;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbmctZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNvbmctZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWd1cmUge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbmg0IHtcbiAgY29sb3I6IGJsdWU7XG59XG5cbmg1IHtcbiAgY29sb3I6IGJyb3duO1xufVxuIl19 */";

/***/ }),

/***/ 9903:
/*!********************************************************************!*\
  !*** ./src/app/songs/song-item/song-item.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "figure {\n    margin-top: 1em;\n    margin-bottom: 1em;\n    margin-left: 5px;\n    margin-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvbmctaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNvbmctaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmlndXJlIHtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59Il19 */";

/***/ }),

/***/ 3501:
/*!******************************************************************!*\
  !*** ./src/app/songs/song-new/song-new.component.css?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzb25nLW5ldy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwyJUMyJUJBREFNXFxSZWN1cGVyYWNpb25lc1xcRGVzYXJyb2xsb1xcUHJveWVjdG9SZWN1LW1haW5cXGZyb250ZW5kXFxzcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0oiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xufVxuXG4jY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICBjb2xvcjogIzhjOGM4YztcbiAgICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIiNjb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSJdfQ== */";

/***/ }),

/***/ 3489:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-navbar></app-navbar>\n<ion-content>\n    <ion-router-outlet></ion-router-outlet>\n</ion-content>\n<app-footer></app-footer>";

/***/ }),

/***/ 1670:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <div class=\"row\" style=\"\n      background: linear-gradient(\n        70deg,\n        rgb(184, 215, 246),\n        rgb(237, 183, 235)\n      );\n    \">\n        <div *ngFor=\"let song of songs\" class=\"col-12 col-md-6 col-lg-3\">\n            <ion-card>\n                <ion-card-header>\n                    <app-song-item [song]=\"song\"></app-song-item>\n                </ion-card-header>\n            </ion-card>\n        </div>\n    </div>\n</ion-content>";

/***/ }),

/***/ 6968:
/*!****************************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container\">\n  <hr>\n  <footer>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <p>&copy; My Store 2021</p>\n      </div>\n    </div>\n  </footer>\n</div>\n";

/***/ }),

/***/ 9734:
/*!****************************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light p-2 text-white bg-opacity-60\" style=\"background: linear-gradient(70deg, rgb(3, 131, 173), white)\">\n    <a class=\"navbar-brand\" [routerLink]=\"['']\"> </a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"> </span>\n  </button>\n\n    <div class=\"navbar-collapse collapse\" id=\"navbarSupportedContent\">\n        <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item\">\n                <img src=\"../../../assets/icon/logo.png\" class=\"figure-img img-fluid rounded\" [routerLink]=\"['/home']\" style=\"width: 100px; height: 100px\" />\n            </li>\n            <li class=\"nav-item my-auto\">\n                <a class=\"btn btn-sm btn-outline-warning mx-2\" (click)=\"newSong()\">Nueva Canción</a\n        >\n      </li>\n    </ul>\n  </div>\n</nav>";

/***/ }),

/***/ 6661:
/*!*************************************************************************!*\
  !*** ./src/app/songs/song-detail/song-detail.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-content>\n    <figure class=\"figure\">\n        <img src=\"{{ song[0].cover }}\" class=\"figure-img img-fluid rounded\" style=\"width: 600px; height: 300px\" />\n        <figcaption class=\"figure-caption\">\n            <h4>Name: {{ song[0].name }}</h4>\n            <h5>Type: {{ song[0].type }}</h5>\n            <h5>Duration: {{ song[0].duration }}</h5>\n            <h5>Singer: {{ song[0].singer }}</h5>\n        </figcaption>\n        <div class=\"row mt-4\">\n            <div class=\"col-md-4\">\n                <button class=\"btn btn-outline-secondary mr-3\" style=\"width: 80px\" (click)=\"onBack()\">\n          <i class=\"fa fa-chevron-left\"></i> Back\n        </button>\n                <button class=\"btn btn-outline-primary\" style=\"width: 80px\" (click)=\"goEdit()\">\n          Edit\n        </button>\n            </div>\n        </div>\n    </figure>\n</ion-content>";

/***/ }),

/***/ 9473:
/*!*********************************************************************!*\
  !*** ./src/app/songs/song-edit/song-edit.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        {{ pageTitle }}\n    </div>\n\n    <div class=\"card-body\">\n        <form novalidate (ngSubmit)=\"saveSong()\" [formGroup]=\"songForm\">\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"songNameId\">Song Name</label\n        >\n        <div class=\"col-md-8\">\n          <input\n            class=\"form-control\"\n            id=\"songNameId\"\n            type=\"text\"\n            placeholder=\"Name (required)\"\n            formControlName=\"name\"\n            name=\"name\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"typeId\">Type</label>\n\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" id=\"typeId\" type=\"text\" placeholder=\"Rock\" formControlName=\"type\" name=\"type\" />\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"durationId\">Duration</label>\n\n                <div class=\"col-md-8\">\n                    <textarea class=\"form-control\" id=\"durationId\" placeholder=\"3:30\" rows=\"3\" formControlName=\"duration\" name=\"duration\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"singerId\">Singer</label>\n\n                <div class=\"col-md-8\">\n                    <textarea class=\"form-control\" id=\"singerId\" placeholder=\"Singer\" rows=\"3\" formControlName=\"singer\" name=\"singer\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"coverId\">Cover</label>\n\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" id=\"coverId\" placeholder=\"Cover\" formControlName=\"cover\" name=\"cover\" />\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <div class=\"offset-md-2 col-md-4\">\n                    <button class=\"btn btn-primary mr-3\" type=\"submit\">Save</button>\n                    <button class=\"btn btn-outline-secondary mr-3\" type=\"button\" title=\"Cancel your edits\" [routerLink]=\"['']\">\n            Cancel\n          </button>\n                    <button class=\"btn btn-outline-warning\" type=\"button\" title=\"Delete this song\" (click)=\"deleteSong()\">\n            Delete\n          </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n</div>";

/***/ }),

/***/ 4082:
/*!*********************************************************************!*\
  !*** ./src/app/songs/song-item/song-item.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<figure class=\"figure\">\n    <img src=\"{{ song.cover }}\" class=\"figure-img img-fluid rounded\" style=\"width: 150px; height: 150px\" />\n    <figcaption class=\"figure-caption\">\n        <h5>\n            <a [routerLink]=\"['/songs', song.id]\">{{ song.name }}</a>\n            <span>{{ song.duration }}</span>\n        </h5>\n        <p>{{ song.singer }}</p>\n    </figcaption>\n</figure>";

/***/ }),

/***/ 60:
/*!*******************************************************************!*\
  !*** ./src/app/songs/song-new/song-new.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"card\">\n    <div class=\"card-header\">\n        {{ pageTitle }}\n    </div>\n\n    <div class=\"card-body\">\n        <form novalidate (ngSubmit)=\"saveSong()\" [formGroup]=\"songForm\">\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"songNameId\">Song Name</label\n        >\n        <div class=\"col-md-8\">\n          <input\n            class=\"form-control\"\n            id=\"songNameId\"\n            type=\"text\"\n            placeholder=\"Name (required)\"\n            formControlName=\"name\"\n            name=\"name\"\n          />\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\" for=\"typeId\">Type</label>\n\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" id=\"typeId\" type=\"text\" placeholder=\"Rock\" formControlName=\"type\" name=\"type\" />\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"duration\">Duration</label>\n\n                <div class=\"col-md-8\">\n                    <textarea class=\"form-control\" id=\"durationId\" placeholder=\"3.30\" rows=\"3\" formControlName=\"duration\" name=\"duration\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"singerId\">Singer</label>\n\n                <div class=\"col-md-8\">\n                    <textarea class=\"form-control\" id=\"singerId\" placeholder=\"Singer\" rows=\"3\" formControlName=\"singer\" name=\"singer\"></textarea>\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <label class=\"col-md-2 col-form-label\" for=\"coverId\">Cover</label>\n\n                <div class=\"col-md-8\">\n                    <input class=\"form-control\" id=\"coverId\" placeholder=\"Cover\" formControlName=\"cover\" name=\"cover\" />\n                </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n                <div class=\"offset-md-2 col-md-4\">\n                    <button class=\"btn btn-primary mr-3\" type=\"submit\">Save</button>\n                    <button class=\"btn btn-outline-secondary mr-3\" type=\"button\" title=\"Cancel your edits\" [routerLink]=\"['']\">\n            Cancel\n          </button>\n                </div>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage\">{{ errorMessage }}</div>\n</div>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map