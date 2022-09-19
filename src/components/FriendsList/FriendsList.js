"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsList = void 0;
const FriendList_module_css_1 = __importDefault(require("./FriendList.module.css"));
const FriendsListItem_1 = require("../FriendListItem/FriendsListItem");
const react_1 = __importDefault(require("react"));
const FriendsList = ({ friend }) => {
    return (react_1.default.createElement("ul", { className: FriendList_module_css_1.default.friendList }, friend.map(({ avatar, name, isOnline, id }) => (react_1.default.createElement(FriendsListItem_1.FriendsListItem, { avatar: avatar, name: name, isOnline: isOnline, key: id })))));
};
exports.FriendsList = FriendsList;
