import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:8008/api'

export const store = new Vuex.Store({
    state: {
        token: localStorage.getItem('authentication') || null,
        refresh: localStorage.getItem('refresh') || null,
        filter: 'all',
        todos: [],
    },
    getters: {
        loggedIn(state) {
            return state.token !== null
        },
        remaining(state) {
            return state.todos.filter(todo => !todo.completed).length
        },
        anyRemaining(state, getters) {
            return getters.remaining != 0
        },
        todosFiltered(state) {
            if (state.filter == 'all') {
                return state.todos
            } else if (state.filter == 'active') {
                return state.todos.filter(todo => !todo.completed)
            } else if (state.filter == 'completed') {
                return state.todos.filter(todo => todo.completed)
            }
            return state.todos
        },
        showClearCompletedButton(state) {
            return state.todos.filter(todo => todo.completed).length > 0
        }
    },
    mutations: {

        retrieveToken(state, token) {
            state.token = token
        },
        destroyToken(state) {
            state.token = null
        },

    },
    actions: {

        clearTodos(context) {
            context.commit('clearTodos')
        },
        destroyToken(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + context.state.token

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                        .then(response => {
                            localStorage.removeItem('authentication')
                            context.commit('destroyToken')
                            resolve(response)
                        })
                        .catch(error => {
                            localStorage.removeItem('authentication')
                            context.commit('destroyToken')
                            reject(error)
                        })
                })
            }
        },
        retrieveToken(context, credentials) {

            return new Promise((resolve, reject) => {
                axios.post('/v1/security/login', {
                    username: credentials.username,
                    password: credentials.password,
                })
                    .then(response => {
                        const token = response.data.authentication
                        const refres = response.data.refresh
                        localStorage.setItem('authentication', token)
                        localStorage.setItem('refresh', refres)
                        context.commit('retrieveToken', token)
                        resolve(response)
                    })
                    .catch(error => {
                        console.log(error)
                        reject(error)
                    })
            })
        },
        refreshToken(context) {
            axios.defaults.headers.common['Refresh'] = 'Bearer ' + context.state.refresh

            if (context.getters.loggedIn) {
                return new Promise((resolve, reject) => {
                    axios.post('/logout')
                        .then(response => {
                            localStorage.removeItem('authentication')
                            context.commit('destroyToken')
                            resolve(response)
                        })
                        .catch(error => {
                            localStorage.removeItem('authentication')
                            context.commit('destroyToken')
                            reject(error)
                        })
                })
            }
        },

    }
})