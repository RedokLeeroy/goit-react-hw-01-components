"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stats = void 0;
const Stats_module_css_1 = __importDefault(require("./Stats.module.css"));
const randomColor_js_1 = __importDefault(require("../randomFolder/randomColor.js"));
const react_1 = __importDefault(require("react"));
const Stats = ({ label, percentage, }) => {
    return (react_1.default.createElement("li", { className: Stats_module_css_1.default.item, style: { backgroundColor: `${(0, randomColor_js_1.default)()}` } },
        react_1.default.createElement("span", { className: Stats_module_css_1.default.label }, label),
        react_1.default.createElement("span", { className: Stats_module_css_1.default.percentage }, percentage)));
};
exports.Stats = Stats;
