"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const prop_types_1 = __importDefault(require("prop-types"));
const Item_module_css_1 = __importDefault(require("./Item.module.css"));
const react_1 = __importDefault(require("react"));
const Item = ({ type, amount, currency }) => {
    return (react_1.default.createElement("tr", { className: Item_module_css_1.default.row },
        react_1.default.createElement("th", null, type),
        react_1.default.createElement("th", null, amount),
        react_1.default.createElement("th", null, currency)));
};
exports.Item = Item;
exports.Item.propTypes = {
    type: prop_types_1.default.string.isRequired,
    amount: prop_types_1.default.string.isRequired,
    currency: prop_types_1.default.string.isRequired,
};
