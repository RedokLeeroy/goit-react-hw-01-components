"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
exports.default = getRandomHexColor;
