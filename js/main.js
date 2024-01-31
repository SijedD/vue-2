
Vue.component('vis',{
    template: `
<div>
    <div class="header">
        <div class="container">
            <div class="logo">ToDo LIST</div>
            <div class="form">
                <label>
                    <input type="text" v-model="todo">
                </label>
                <button v-on:click="addTask">Add a new task</button>
            </div>
        </div>
    </div>
    
    <div class="container">
        <div class="toDo">
            <h2>
                <span>To Do</span>
                <span class="mask-num">{{needDoList.length}}</span>
            </h2>
            <ul class="mask-list">
                <div v-for="(detail, i) in needDoList " :key="i">
                    <span>№ {{ i + 1 }}|</span>
                    <span>Дело: {{ detail }}</span>
                    <div>
                        <input type="checkbox" v-on:click="Radio">Запланировал<br>
                        <input type="checkbox" v-on:click="Radio">Подготовка<br>
                        <input type="checkbox" v-on:click="Radio">Начал<br>
                        <input type="checkbox" v-on:click="Radio">В процесе<br>
                        <input type="checkbox" v-on:click="Radio">Сделал<br>
                    </div>
                </div>
            </ul>
        </div>
        <div class="DoClass">
            <div class="Do">
                <h2>
                    <span>Do</span>
                    <span class="mask-num">{{needDoListDo.length}}</span>

                </h2>
                <ul class="complete-list">

                    <div v-for="(detail, i) in needDoListDo " :key="i">

                        <span>№ {{ i + 1 }}|</span>
                        <span>Дело: {{ detail }}</span>
                        <span>Дело: {{ needDoListDo }}</span>
                        <div>
                            <input type="checkbox" v-on:click="RadioDo" checked>Запланировал<br>
                            <input type="checkbox" v-on:click="RadioDo" checked>Подготовка<br>
                            <input type="checkbox" v-on:click="RadioDo" checked>Начал<br>
                            <input type="checkbox" v-on:click="RadioDo">В процесе<br>
                            <input type="checkbox" v-on:click="RadioDo">Сделал<br>

                        </div>

                    </div>
                </ul>
            </div>
        </div>
        <div class="Done">
            <h2>
                <span>Done</span>
                <span class="mask-num">{{needDoListDone.length}}</span>
            </h2>
            <div v-for="(detail, i) in needDoListDone " :key="i">
                <span>№ {{ i + 1 }}|</span>
                <span>Дело: {{ detail }}</span>
                <div>
                    <input type="checkbox" checked>Запланировал<br>
                    <input type="checkbox" checked>Подготовка<br>
                    <input type="checkbox" checked>Начал<br>
                    <input type="checkbox" checked>В процесе<br>
                    <input type="checkbox" checked>Сделал<br>

                </div>
            </div>
        </div>
    </div></div>
    `,
    data() {
        return{
            todo: '',
            needDoList: [],
            needDoListDo: [],
            needDoListDone:[],
            schetchik: 0,
        }
    },
    methods:{
        addTask(){

            if(this.todo === ""){
                alert("Введите значение")
                return
            }
            if (this.needDoList.length >=3 ){
                alert("Больше 3 нельзя")
            }
            else {
                this.needDoList.push({title: this.todo});
                this.todo = '';
            }
        },
        Radio(index) {
            if (this.needDoListDo.length >=5){
                alert("Больше 5 нельзя")
                return
            }
            else {
                this.schetchik += 1;
                if (this.schetchik >=3 && this.schetchik < 5){
                    const need1 = this.needDoList.splice(index, 1);
                    this.needDoListDo.push(...need1);
                    this.schetchik = 0
                }}

        },
        RadioDo(i){
            this.schetchik += 1
            if (this.schetchik >= 2){
                this.schetchik = 0
                const need2 = this.needDoListDo.splice(i, 1)
                this.needDoListDone.push(...need2)
            }
        }

    }
})


let app = new Vue({
    el: '#app',
})
