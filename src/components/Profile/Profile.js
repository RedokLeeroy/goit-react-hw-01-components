"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const Profile_module_css_1 = __importDefault(require("./Profile.module.css"));
const react_1 = __importDefault(require("react"));
const Profile = ({ data }) => {
    const { username, tag, location, avatar, stats } = data;
    const { followers, views, likes } = stats;
    return (react_1.default.createElement("div", { className: Profile_module_css_1.default.profile },
        react_1.default.createElement("div", { className: Profile_module_css_1.default.description },
            react_1.default.createElement("img", { src: avatar, alt: "User avatar", className: Profile_module_css_1.default.avatar }),
            react_1.default.createElement("p", { className: Profile_module_css_1.default.name }, username),
            react_1.default.createElement("p", { className: Profile_module_css_1.default.tag }, tag),
            react_1.default.createElement("p", { className: Profile_module_css_1.default.location }, location)),
        react_1.default.createElement("ul", { className: Profile_module_css_1.default.stats },
            react_1.default.createElement("li", { className: Profile_module_css_1.default.statsItem },
                react_1.default.createElement("span", { className: Profile_module_css_1.default.label }, "Followers"),
                react_1.default.createElement("span", { className: Profile_module_css_1.default.quantity }, followers)),
            react_1.default.createElement("li", { className: Profile_module_css_1.default.statsItem },
                react_1.default.createElement("span", { className: Profile_module_css_1.default.label }, views),
                react_1.default.createElement("span", { className: Profile_module_css_1.default.quantity }, "2000")),
            react_1.default.createElement("li", { className: Profile_module_css_1.default.statsItem },
                react_1.default.createElement("span", { className: Profile_module_css_1.default.label }, "Likes"),
                react_1.default.createElement("span", { className: Profile_module_css_1.default.quantity }, likes)))));
};
exports.Profile = Profile;
