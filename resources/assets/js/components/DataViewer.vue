<template>
    <div class="dv">
        <div class="dv-header">
            <div class="dv-header-title">
                {{ title }}
            </div>
            <div class="dv-header-columns">
                <span>Search: </span>
                <select class="dv-header-select" v-model="query.search_column">
                    <option v-for="column in columns" :value="column">{{ column }}</option>
                </select>
            </div>
            <div class="dv-header-operators">
                <select class="dv-header-select" v-model="query.search_operator">
                    <option v-for="(value, key) in operators" :value="key">{{ value }}</option>
                </select>
            </div>
            <div class="dv-header-search">
                <input
                        type="text"
                        class="dv-header-input"
                        v-model="query.search_input"
                        placeholder="Search..."
                        @keyup.enter="fetchIndexData()"
                >
            </div>
            <div class="dv-header-submit">
                <button class="dv-header-btn" @click="fetchIndexData()">
                    Filterf
                </button>
            </div>
        </div>

        <div class="dv-body">
            <table class="dv-table">
                <thead>
                <tr>
                    <th v-for="column in columns" @click="toggleOrder(column)">
                        <span>{{ column }}</span>
                        <span class="dv-table-column" v-if="column === query.column">
                            <span v-if="query.direction === 'asc'">&uarr;</span>
                            <span v-if="query.direction === 'desc'">&darr;</span>
                        </span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="row in model.data">
                    <td v-for="(value, key) in row">{{ value }}</td>
                </tr>
                </tbody>
            </table>
        </div>

        <div class="dv-footer">
            <div class="dv-footer-item">
                <span>Displaying {{ model.from }} - {{ model.to }} of {{ model.total }} rows</span>
            </div>
            <div class="dv-footer-item">
                <div class="dv-footer-sub">
                    <span>Rows per page</span>
                    <input type="text" v-model="query.per_page" class="dv-footer-input" @keyup.enter="fetchIndexData()">
                </div>
                <div class="dv-footer-sub">
                    <button class="dv-footer-btn" @click="prev()">&laquo;</button>
                    <button class="dv-footer-btn" @click="next()">&raquo;</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['source', 'title'],

        created(){
            this.fetchIndexData();
        },
        data(){
            return {
                model: {},
                columns: {},
                query: {
                    page: 1,
                    column: 'id',
                    direction: 'asc',
                    per_page: 10,
                    search_column: 'id',
                    search_operator: 'equal',
                    search_input: ''
                },
                operators: {
                    equal: '=',
                    not_equal: '<>',
                    less_than: '<',
                    greater_than: '>',
                    less_than_or_equal_to: '<=',
                    greater_than_or_equal_to: '>='
                }
            };
        },

        methods: {
            fetchIndexData(){
                let vm = this;
                let query = `${this.source}`
                    + `?column=${this.query.column}`
                    + `&direction=${this.query.direction}`
                    + `&page=${this.query.page}`
                    + `&per_page=${this.query.per_page}`
                    + `&search_column=${this.query.search_column}`
                    + `&search_operator=${this.query.search_operator}`
                    + `&search_input=${this.query.search_input}`
                    ;

                axios.get(query)
                    .then(response => {
                        // Why are we using .set here? isn't it's possible and easier to use this.{prop} = 'smth'
                        Vue.set(vm.$data, 'model', response.data.model);
                        Vue.set(vm.$data, 'columns', response.data.columns);
                    })
                    .catch(response => console.log(response));
            },

            toggleOrder(column){
                if (column === this.query.column) {
                    this.query.direction = this.query.direction === 'asc' ? 'desc' : 'asc';
                } else {
                    this.query.column = column;
                    this.query.direction = 'asc';
                }

                this.fetchIndexData();
            },
            next(){
                if (this.model.next_page_url) {
                    this.query.page++;
                    this.fetchIndexData();
                }
            },
            prev(){
                if (this.model.prev_page_url) {
                    this.query.page--;
                    this.fetchIndexData();
                }
            }
        }
    }
</script>