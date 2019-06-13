"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("../mixins/basic"));
Component({
    behaviors: [basic_1.default],
    relations: {
        '../Feeds/feeds': {
            type: 'parent',
        },
    },
    properties: {
        width: {
            type: String,
            value: '50',
            optionalTypes: [String],
        }
    },
});
