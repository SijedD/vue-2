let app = new Vue({
    el: '#app',
    data: {
        todo: "",
        needDoList: [],
        needDoListDo: [],
        needDoListDone:[],
        schetchik: 0
    },
    methods: {
        addTask(){
            this.needDoList.push(this.todo);
        },
        doCheck(){
            for(let element in this.needDoList) {
                    this.needDoList.splice(this.needDoList[element], 1)
            }
                this.needDoListDo.push(this.todo)
        },
        doneCheck(){
            for(let element in this.needDoListDo) {
                this.needDoListDo.splice(this.needDoListDo[element], 1)
            }
            this.needDoListDone.push(this.todo)
        },
        schetRadio() {
            this.schetchik += 1
            console.log(this.schetchik)
            if (this.schetchik >=3 && this.schetchik < 5){
                for(let element in this.needDoList) {
                    this.needDoList.splice(this.needDoList[element], 1)
                }
                this.needDoListDo.push(this.todo)
                this.schetchik = 0
            }

        },
        schetRadioDo(){
            this.schetchik += 1
            console.log(this.schetchik)
            if (this.schetchik >= 2){
                for(let element in this.needDoListDo) {
                    this.needDoListDo.splice(this.needDoListDo[element], 1)
                }
                this.schetchik = 0
                this.needDoListDone.push(this.todo)
            }
        }

    }})

