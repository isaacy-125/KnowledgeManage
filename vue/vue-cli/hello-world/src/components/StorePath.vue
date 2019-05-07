<template>
    <div>
        StorePath
        <div>
            <button @click='addCount'>
                add count
            </button>
            <button @click='addCountAsync'>
                add count async
            </button>
            {{ $store.state.storepath.count }}
        </div>
        <div>
            <button @click='addNumber(2)'>
                add number
            </button>
            {{ number }}
        </div>
        <div>
            <ul>
                <li :key='todo.id' v-for='todo in doneTodos'>
                    {{ todo.text }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
export default {
    name: 'StorePath',
    methods: {
        // addCount: function() {
        //     this.$store.commit('increment');
        // },
        addNumber: function(num) {
            this.$store.commit('storepath/addNumber', num);
        },
        // addCountAsync: function() {
        //     this.$store.dispatch('incrementAsync')
        // },
        ...mapMutations({
            addCount: 'storepath/increment'
        }),
        ...mapActions({
            addCountAsync: 'storepath/incrementAsync'
        })
    },
    computed: {
        ...mapState({
            number: state => state.storepath.number,
            doneTodos: (state, getters) => getters.doneTodos
        })
    }
}
</script>

<style>

</style>
