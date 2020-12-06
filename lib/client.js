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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosettaClient = void 0;
var axios_1 = require("axios");
var utils = require("./utils");
var RosettaClient = /** @class */ (function () {
    function RosettaClient(_a) {
        var _this = this;
        var _b = _a.baseUrl, baseUrl = _b === void 0 ? "https://api.lunar.dev/v1" : _b, _c = _a.headers, headers = _c === void 0 ? {} : _c;
        /**********************************************
         ** Data Endpoints
         **********************************************/
        this.accountBalance = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/account/balance", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.block = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/block", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_2 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_2)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.blockTransaction = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/block/transaction", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_3)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.networksList = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, lunarRes, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/network/list", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        lunarRes = response.data;
                        return [2 /*return*/, lunarRes];
                    case 2:
                        error_4 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_4)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.networkOptions = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/network/options", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_5 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_5)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.networkStatus = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/network/status", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_6 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_6)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.mempool = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/mempool", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_7 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_7)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.mempoolTransaction = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/mempool/transaction", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_8 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_8)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        /**********************************************
         ** Construction Endpoints
         **********************************************/
        this.combine = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/combine", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_9 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_9)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.derive = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/derive", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_10 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_10)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.hash = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/hash", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_11 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_11)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.metadata = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/metadata", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_12 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_12)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.parse = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/parse", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_13 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_13)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.payloads = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/payloads", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_14 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_14)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.preprocess = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/preprocess", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_15 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_15)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.submit = function (req) { return __awaiter(_this, void 0, void 0, function () {
            var response, data, error_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, axios_1.default.post(this._baseUrl + "/construction/submit", req, utils.setCustomHeaders(this._headers))];
                    case 1:
                        response = _a.sent();
                        data = response.data;
                        return [2 /*return*/, data];
                    case 2:
                        error_16 = _a.sent();
                        return [2 /*return*/, Promise.reject(error_16)];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    return RosettaClient;
}());
exports.RosettaClient = RosettaClient;
//# sourceMappingURL=client.js.map