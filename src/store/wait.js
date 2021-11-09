import {useStore} from 'vuex';
import { computed } from '@vue/reactivity';
export const wait = {
    namespaced: true,
    state() {
        return {
            queue: []
        }
    },
    mutations: {
        start(state, task) {
            state.queue.push(task)
        },
        end(state, task) {
            state.queue = state.queue.filter(item => item !== task);
        }
    }
}

export const useWait = (task) => {
    const store = useStore();
    console.log(store.state.wait.queue);
    return computed(() => store.state.wait.queue.includes(task));
};