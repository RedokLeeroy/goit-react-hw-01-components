var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Statistics = void 0;
const Statistics_module_css_1 = __importDefault(
  require('./Statistics.module.css')
);
const react_1 = __importDefault(require('react'));
const Statistics = ({ title, children }) => {
  return react_1.default.createElement(
    'section',
    { className: Statistics_module_css_1.default.statistics },
    title &&
      react_1.default.createElement(
        'h2',
        { className: Statistics_module_css_1.default.title },
        title
      ),
    children
  );
};
exports.Statistics = Statistics;
