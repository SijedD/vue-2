new Vue({
    el: '#app',
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
            newCardTitle: '',
            newItemText: '',
            check: true,

        }
    },
    mounted(){
        if (localStorage.getItem('column1')) {
            try {
                this.column1 = JSON.parse(localStorage.getItem('column1'));
            } catch(e) {
                localStorage.removeItem('column1');
            }
        }
        if (localStorage.getItem('column2')) {
            try {
                this.column2 = JSON.parse(localStorage.getItem('column2'));
            } catch(e) {
                localStorage.removeItem('column2');
            }
        }
        if (localStorage.getItem('column3')) {
            try {
                this.column3 = JSON.parse(localStorage.getItem('column3'));
            } catch(e) {
                localStorage.removeItem('column3');
            }
        }

    },
    methods: {
        handleCardPosition(card) {
            const totalItems = card.items.length;
            const completedItems = card.items.filter(item => item.completed).length;

            if (completedItems / totalItems >= 0.5 && this.column1.includes(card)) {
                if (card.items.text === ''){console.log('asd')}
                if(this.column2.length ===5 && completedItems / totalItems >= 0.5 && this.column1.includes(card) ){ this.check = false}
                else {
                this.column1.splice(this.column1.indexOf(card), 1);
                this.column2.push(card);
                this.saveLocalStorage();}
            } else if (completedItems / totalItems === 1 && this.column2.includes(card)) {
                this.column2.splice(this.column2.indexOf(card), 1);
                this.check = true
                this.column3.push(card);
                card.completedDate = new Date().toLocaleString(); // добавляем дату и время завершения
                this.saveLocalStorage();
            }
        },
        addCard() {
            if (this.newCardTitle !== '' && this.column1.length < 3) {
                const newCard = {
                    id: Date.now(),
                    title: this.newCardTitle,
                    items: [
                        { text: '', completed: false, editing: true },
                        { text: '', completed: false, editing: true },
                        { text: '', completed: false, editing: true }
                    ],
                };
                if (this.newCardTitle !== '' ) {
                    this.column1.push(newCard);
                }

                this.handleCardPosition(newCard);
                this.newCardTitle = '';
                this.newItemText = '';
                this.saveLocalStorage();

            }





        },
        addItem(card){
            if(this.newItemText != '' && card.items.length <= 4){
            card.items.push({id: Date.now(), text: this.newItemText, checked: false})
            this.newItemText = '';}
        },
        saveLocalStorage() {
            const parsed = JSON.stringify(this.column1);
            const parsed1 = JSON.stringify(this.column2);
            const parsed2 = JSON.stringify(this.column3);
            localStorage.setItem('column1', parsed);
            localStorage.setItem('column2', parsed1);
            localStorage.setItem('column3', parsed2);
        },





    },
    computed: {
        columeTaskCount(){
            return this.column2.length
        },
        TaskCheck(){
            return this.check
        }
    }
})


// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");

// Получить элемент <span>, который закрывает модальный
var close = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
    modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закройте модальное окно
close.onclick = function() {
    modal.style.display = "none";
}
