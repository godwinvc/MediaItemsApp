"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var favorite_directive_1 = require('./favorite.directive');
var MediaItemComponent = (function () {
    function MediaItemComponent() {
        this.delete = new core_1.EventEmitter();
    }
    MediaItemComponent.prototype.onDelete = function () {
        this.delete.emit(this.mediaItem);
    };
    __decorate([
        core_1.Input('mediaItemToWatch'),
        __metadata('design:type', Object)
    ], MediaItemComponent.prototype, "mediaItem", void 0);
    __decorate([
        core_1.Output('deleted'),
        __metadata('design:type', Object)
    ], MediaItemComponent.prototype, "delete", void 0);
    MediaItemComponent = __decorate([
        core_1.Component({
            selector: 'media-item',
            directives: [favorite_directive_1.FavoriteDirective],
            templateUrl: 'app/media-item.component.html',
            styleUrls: ['app/media-item.component.css']
        }),
        __metadata('design:paramtypes', [])
    ], MediaItemComponent);
    return MediaItemComponent;
}());
exports.MediaItemComponent = MediaItemComponent;
//# sourceMappingURL=media-item.component.js.map
