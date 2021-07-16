declare namespace scroll {
    interface itemSize {
        width: number
        height: number
    }

    type itemSizeFunc<T> = (item: T, index: number) => itemSize

    interface options<T> {
        id: string
        dataKey: string
        pageSize: number
        itemSize: itemSizeFunc<T> | itemSize
        page: any
    }
    interface ScrollContext<T> {
        append(list: T[], callback?: () => void): ScrollContext<T>
        appendList(list: T[], callback?: () => void): ScrollContext<T>
        splice(begin: number, deleteCount: number, appendList: T[], callback?: () => void): ScrollContext<T>;
        updateList(beginIndex: number, list: T[], callback?: () => void): ScrollContext<T>
        update(beginIndex: number, list: T[], callback?: () => void): ScrollContext<T>
        destroy(): ScrollContext<T>
    }
}

import scrollData from './utils/scroll-data'

class Scroll<T> implements scroll.ScrollContext<T> {
    id: string
    dataKey: string
    pageSize: number
    itemSize: any
    page: any
    component: any

    constructor({ id, dataKey, pageSize, itemSize, page }: scroll.options<T>) {
        if(!id || !dataKey || !pageSize || !itemSize || !page) {
            throw new Error('parameter id, dataKey, pageSize, itemSize is required!')
        }
        this.id = id
        this.dataKey = dataKey
        this.pageSize = pageSize
        this.page = page
        this.itemSize = itemSize
        this.component = page.selectComponent(`#${id}`)
    }
    append(list: T[], callback?: (() => void) | undefined): scroll.ScrollContext<T> {
        throw new Error("Method not implemented.");
    }
    appendList(list: T[], callback?: (() => void) | undefined): scroll.ScrollContext<T> {
        throw new Error("Method not implemented.");
    }
    splice(begin: number, deleteCount: number, appendList: T[], callback?: (() => void) | undefined): scroll.ScrollContext<T> {
        throw new Error("Method not implemented.");
    }
    updateList(beginIndex: number, list: T[], callback?: (() => void) | undefined): scroll.ScrollContext<T> {
        throw new Error("Method not implemented.");
    }
    update(beginIndex: number, list: T[], callback?: (() => void) | undefined): scroll.ScrollContext<T> {
        throw new Error("Method not implemented.");
    }
    destroy(): scroll.ScrollContext<T> {
        throw new Error("Method not implemented.");
    }
}

export default <T>(options: scroll.options<T>) => {
    new Scroll(options)
}
