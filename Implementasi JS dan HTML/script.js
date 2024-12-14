let books = [];
let isEditing = false;
const formElement = document.getElementById('bookForm');
const buttonElement = document.getElementById('submitBtn')
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const priceInput = document.getElementById('price');
const stockInput = document.getElementById('stock');
const idInput = document.getElementById('id');

const operations = {  
    created: function(book) {
        books.push({
            id: Math.random().toString(36).substring(2, 15),
            ...book,
        });
        displayBooks();
    },

    updated: function(id, book) {
        const selectedBook = this.getBookById(id);

        const updatedBook = {
            ...book,
            id: selectedBook.id
        };

        const index = books.indexOf(selectedBook);
        books[index] = {...updatedBook};

        displayBooks();
        resetFormState();
    },

    deleted: function(id) {
        const selectedBook = this.getBookById(id);
        books.splice(books.indexOf(selectedBook), 1);
        displayBooks();
    },

    getBookById: function(id) {
        const selectedBook = books.find((book) => book.id === id);
        return selectedBook;
    },

    getAllBooks: function() {
        return books;
    }
}

function getBookbyId(id) {
    return books.find((book) => book.id === id);
}

function updateBook(id) {
    const selectedBook = operations.getBookById(id);
    
    const updatedBook = {
        title: titleInput.value,
        author: authorInput.value,
        price: priceInput.value,
        stock: stockInput.value
    };

    const index = books.indexOf(selectedBook);
    books[index] = {
        ...updatedBook,
        id: selectedBook.id
    };
    displayBooks();
    resetFormState();
}

function deleteBook(id) {
    const selectedBook = operations.getBookById(id);
books.splice(books.indexOf(selectedBook), 1);
displayBooks();
}

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    books.forEach((book) => {
        const bookElement = document.createElement("tr");
        bookElement.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.price}</td>
            <td>${book.stock}</td>
            <td>
                <button class="btn btn-primary" onclick="showSelectedBook('${book.id}')">Edit</button>
                <button class="btn btn-danger" onclick="operations.deleted('${book.id}')">Delete</button>
            </td>
        `;
        bookList.appendChild(bookElement);
    });
}

function resetFormState() {
    buttonElement.textContent = "Add";
    buttonElement.classList.remove("btn-warning");
    buttonElement.classList.add("btn-primary");
    isEditing = false;
    formElement.reset();
}

function showSelectedBook(id) {
    const selectedBook = operations.getBookById(id);   
    console.log(selectedBook)
    titleInput.value = selectedBook.title;
    authorInput.value = selectedBook.author;
    priceInput.value = selectedBook.price;
    stockInput.value = selectedBook.stock;
    idInput.value = selectedBook.id;

    console.log(buttonElement)
    buttonElement.textContent = "Update";
    isEditing = true;
    buttonElement.classList.remove("btn-primary");
    buttonElement.classList.add("btn-warning");
}

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    if (isEditing) {
        operations.updated(idInput.value, {
            title: titleInput.value,
            author: authorInput.value,
            price: priceInput.value,
            stock: stockInput.value
        });
    } else {
        operations.created({
            title: titleInput.value,
            author: authorInput.value,
            price: priceInput.value,
            stock: stockInput.value
        });
    }

    resetFormState();
});

// formElement.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const title = titleInput.value;
//     const author = authorInput.value;
//     const price = priceInput.value;
//     const stock = stockInput.value;

//     addBook({title,author,price,stock});

//     titleInput.value =""
//     authorInput.value=""
//     priceInput.value=""
//     stockInput.value=""
// });

// function addBook(book){
//     books.push(book);
//     displayBooks();
// }

// function displayBooks() {
//     const bookList = document.getElementById("bookList");
//     console.log(bookList);
//     bookList.innerHTML = "";
//     books.forEach((book) => {
//         const bookElement = document.createElement("tr");
//         bookElement.innerHTML = `
//         <td>${book.title}</td>       
//         <td>${book.author}</td>       
//         <td>${book.price}</td>       
//         <td>${book.stock}</td>  
//         <td>
//             <button class="btn btn-primary" onclick="editBook(${book.id})">Edit</button>
//             <button class="btn btn-danger" onclick="deleteBook(${book.id})">Delete</button>
//         </td>     
//         `
//         bookList.appendChild(bookElement);
//     });
// }