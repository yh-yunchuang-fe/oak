"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = __importDefault(require("../mixins/basic"));
Component({
    behaviors: [basic_1.default],
    properties: {
        title: {
            type: String,
            value: '',
            optionalTypes: [String],
        },
        border: {
            type: Boolean,
            value: false,
            optionalTypes: [Boolean],
        }
    },
    externalClasses: ['title-class', 'ext-class'],
});
