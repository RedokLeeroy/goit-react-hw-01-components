"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsListItem = void 0;
const react_1 = __importDefault(require("react"));
const FriendsListItem_module_css_1 = __importDefault(require("./FriendsListItem.module.css"));
const FriendsListItem = ({ avatar, name, isOnline }) => {
    return react_1.default.createElement("li", { className: FriendsListItem_module_css_1.default.item },
        react_1.default.createElement("span", { className: isOnline ? FriendsListItem_module_css_1.default.online : FriendsListItem_module_css_1.default.offline }),
        react_1.default.createElement("img", { className: FriendsListItem_module_css_1.default.avatar, src: avatar, alt: "User avatar", width: "48" }),
        react_1.default.createElement("p", { className: FriendsListItem_module_css_1.default.name }, name));
};
exports.FriendsListItem = FriendsListItem;
