class UI {
    constructor() {
        this.listBoxWrapper = document.querySelector('#list-boxes-wrapper');
        this.listQuantifiersWrapper = document.querySelector('#list-quantifiers-wrapper');
    }

    addItems(list) {
        let value = 1;

        list.forEach(itemName => {
            this.listBoxWrapper.innerHTML += `
                <div class="list-box-single">
                    <div class="box-title">
                        <span>${itemName}</span>
                    </div>
                    <div class="box-btn">
                        <i class="fas fa-minus minus-btn"></i>
                        <input type="number" id="quantifier" value="${value}" disabled>
                        <i class="fas fa-plus plus-btn"></i>
                    </div>
                    <div id="checkbox">
                        <i class="fas fa-check box-checkbox"></i>
                    </div>
                </div>
            `;
        });
    }

    countAmount() {
        const minusBtns = document.querySelectorAll('.minus-btn');
        const plusBtns = document.querySelectorAll('.plus-btn');

        for(let el of minusBtns) {
            el.addEventListener('click', e => {
                if(e.target.nextElementSibling.value > 0){
                    e.target.nextElementSibling.value--;
                }
            })
        }

        for(let el of plusBtns) {
            el.addEventListener('click', e => {
                e.target.previousElementSibling.value++;
            })
        }
    }

    takedItem() {
        this.listBoxWrapper.addEventListener('click', e => {
            if(e.target.classList.contains('box-checkbox')) {
                e.target.parentElement.parentElement.classList.toggle('takedItem');
            }
        });
    }
}