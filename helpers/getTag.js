"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getTag = void 0;
var pug = require("pug");
var getStyles_1 = require("./getStyles");
function getTag(json) {
    return __awaiter(this, void 0, void 0, function () {
        var html, _i, json_1, item, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0:
                    html = [];
                    _i = 0, json_1 = json;
                    _m.label = 1;
                case 1:
                    if (!(_i < json_1.length)) return [3 /*break*/, 7];
                    item = json_1[_i];
                    if (!(item.childs && item.childs.length > 0)) return [3 /*break*/, 4];
                    _b = (_a = html).push;
                    _d = (_c = pug).render;
                    _e = item.tag + "(style=";
                    return [4 /*yield*/, getStyles_1.getStyles(item.styles)];
                case 2:
                    _f = _e + (_m.sent()) + ") " + item.content + "\n\t";
                    return [4 /*yield*/, getTag(item.childs)];
                case 3:
                    _b.apply(_a, [_d.apply(_c, [_f + (_m.sent())])]);
                    return [3 /*break*/, 6];
                case 4:
                    _h = (_g = html).push;
                    _k = (_j = pug).render;
                    _l = item.tag + "(style=";
                    return [4 /*yield*/, getStyles_1.getStyles(item.styles)];
                case 5:
                    _h.apply(_g, [_k.apply(_j, [_l + (_m.sent()) + ") " + item.content])]);
                    _m.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/, html.join('')];
            }
        });
    });
}
exports.getTag = getTag;
