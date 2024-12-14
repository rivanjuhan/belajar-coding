const book = {
    tittle : "harry Potter",
    author : "J.K Rowling",
    price : 100000,
    qty : 10
}

const managementBook = {
    inventory: [],
    addBook: function(book){
        this.inventory.push(book);
    },
    updateBook: function(title,book){
        const bookIndex = this.inventory.findIndex(book=>book.tittle === title);

        if(bookIndex !== -1){
            this.inventory[bookIndex] = book;
        }
    },
    deleteBook: function(title){
        const bookIndex = this.inventory.findIndex(book=>book.tittle === title);

        if(bookIndex !== -1){
            this.inventory.splice(bookIndex, 1);
        }
    }
}
console.log(managementBook.inventory)
managementBook.addBook(book);
managementBook.addBook({
    tittle : "harry Potter 2",
    author : "J.K Rowling",
    price : 100000,
    qty : 3
})
console.log(managementBook.inventory)

managementBook.updateBook("harry Potter",{
    tittle : "harry skuter",
    author : "J.K Rowling",
    price : 100000,
    qty : 10
});

managementBook.deleteBook("harry Potter 2");
console.log(managementBook.inventory)