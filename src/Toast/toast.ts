import BasicBehavior from 'Mixins/basic'

Component({
    behaviors: [BasicBehavior],
    properties: {
        options: {
            type: Object,
            value: null,
            optionalTypes: [Object],
            observer(nval, oval) {
                if (!nval || nval === oval || !nval.show) return
                let { toasts = [] } = this.data
                toasts.push( Object.assign(nval, { id: new Date().getTime() }))
                this.setData({ toasts })
            }
        }
    },
    data: {
        toasts: []
    },
    methods: {
        clearToast({detail}) {
            const { toast: { id } } = detail
            if(!id) return
            const { toasts } = this.data
            let list = toasts.filter((x: any) => x.id !== id)
            this.setData({ toasts: list })
        }
    }
})
