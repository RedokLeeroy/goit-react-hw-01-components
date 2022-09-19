"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stat = void 0;
const Stat_module_css_1 = __importDefault(require("./Stat.module.css"));
const Stats_1 = require("../Stats/Stats");
const react_1 = __importDefault(require("react"));
const Stat = ({ data }) => {
    return (react_1.default.createElement("ul", { className: Stat_module_css_1.default.statList }, data.map(({ id, label, percentage }) => (react_1.default.createElement(Stats_1.Stats, { key: id, label: label, percentage: percentage })))));
};
exports.Stat = Stat;
