/*! *****************************************************************************
Copyright (c) 2018 Tencent, Inc. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
***************************************************************************** */

/// <reference path="./lib.wx.app.d.ts" />
/// <reference path="./lib.wx.page.d.ts" />
/// <reference path="./lib.wx.api.d.ts" />
/// <reference path="./lib.wx.cloud.d.ts" />
/// <reference path="./lib.wx.component.d.ts" />

declare type IAnyObject = Record<string, any>

declare type KVInfer<T> = {
  [K in keyof T]: T[K]
}

declare type Void<T> = T | undefined | null

type PartialOptional<T, K extends keyof T> = Partial<Pick<T, K>> & Pick<T, Exclude<keyof T, K>>

type Optional<T> = {
  [K in keyof T]+?: T[K]
}

declare type Target = {
  id: string;
  tagName: string;
  dataset: {
    [key: string]: any;
  }
}

declare type event = {
  /**
   * 代表事件的类型。
   */
  type: string;
  /**
   * 页面打开到触发事件所经过的毫秒数。
   */
  timeStamp: number;
  /**
   * 触发事件的源组件。
   */
  target: Target;
  /**
   * 事件绑定的当前组件。
   */
  currentTarget: Target;
  /**
   * 	额外的信息
   */
  detail: any;
}