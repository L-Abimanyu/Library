const bookCheck = document.querySelector(".book");
const titleCheck = document.querySelector(".title");
const pagesCheck = document.querySelector(".pages");

const formCheck = document.querySelector('.validform')



const submit = document.querySelector('#submit')
submit.addEventListener('click', addBookToLibrary)



let myLibrary = [];

function addBookToLibrary(e) {

    
    if (!formCheck.checkValidity()) return
    
    formCheck.reportValidity()
    
    e.preventDefault()

    const book = document.querySelector(".book");
    const title = document.querySelector(".title");
    const pages = document.querySelector(".pages");
    let library = {
        book: book.value,
        title: title.value,
        pages: pages.value
    }

    myLibrary.push(library)
    addItem()

}


function addItem() {

    
    const last = myLibrary[myLibrary.length - 1]
    const createRow = document.createElement('div')
    createRow.classList.add('card-row')

    const addToCards = document.querySelector("#cards");

    for (let key in last) {
        const displayBook = document.createElement("div")
        displayBook.classList.add('card')
        displayBook.innerText = last[key]
        createRow.append(displayBook)
    }
    addToCards.appendChild(createRow)

    
    const button = document.createElement("button");
    button.classList.add("button")
    button.classList.add("delete")
    button.innerText = "Delete"
    createRow.appendChild(button);



    button.addEventListener('click', function () {
        console.log(this);
        this.parentNode.remove()
    })


        
    const state = document.createElement("button");
    state.classList.add("state")
    state.classList.add("read")
    state.innerText = "Not Read"
    createRow.appendChild(state);

    state.addEventListener('click', function () {
        console.log(this);
        this.classList.toggle("read")
        if (state.innerText === "Not Read") {
            state.innerText = "Read";
        } else {
            state.innerText = "Not Read";
        }
    })
}