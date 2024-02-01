new Vue({
    el: '#app',
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
            newCardTitle: '',
            newItemText: '', // добавляемое пользователем значение текста элемента// добавляемое пользователем значение заголовка
        }
    },
    methods: {
        handleCardPosition(card) {
            const totalItems = card.items.length;
            const completedItems = card.items.filter(item => item.completed).length;

            if (completedItems / totalItems > 0.5 && this.column1.includes(card)) {
                this.column1.splice(this.column1.indexOf(card), 1);
                this.column2.push(card);
            } else if (completedItems / totalItems === 1 && this.column2.includes(card)) {
                this.column2.splice(this.column2.indexOf(card), 1);
                this.column3.push(card);
                card.completedDate = new Date().toLocaleString(); // добавляем дату и время завершения
            }
        },
        addCard() {
            if (this.newCardTitle !== '' && this.column1.length < 3) {
                const newCard = {
                    id: Date.now(),
                    title: this.newCardTitle,
                    items: this.newItemText.split('\n').filter(item => item.trim() !== '').map(item => ({ text: item, completed: false }))
                };
                if (this.newCardTitle !== '' && newCard.items.length >= 3 && newCard.items.length <= 5) {
                    this.column1.push(newCard);
                }
                else alert("Введите правильные значения!!!")
                {

                }
                this.handleCardPosition(newCard);
                this.newCardTitle = '';
                this.newItemText = '';
            }
        },



    }
})