"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStore = void 0;
const goods_json_1 = __importDefault(require("./goods.json"));
class DataStore {
}
exports.DataStore = DataStore;
DataStore.goods = goods_json_1.default;
