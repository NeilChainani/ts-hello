"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LikeComponent {
    constructor(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    onClick() {
        this._likesCount += this._isSelected ? 1 : -1;
        this._isSelected = !this._isSelected;
    }
    get likesCount() {
        return this._likesCount;
    }
    set likesCount(value) {
        this._likesCount = value;
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        this._isSelected = value;
    }
}
exports.LikeComponent = LikeComponent;
//# sourceMappingURL=like.component.js.map