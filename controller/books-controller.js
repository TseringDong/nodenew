let book = []; // {ID, TITLE, DESCRIPTION, CATEGORYID, AUTHOR, CREATEDDATE}

// GET ALL BOOK, REQUEST METHOD: GET
exports.getAllbook = (request, response) => {
    response.json(book);
}

// CREATE NEW BOOK, REQUEST METHOD: POST
exports.createBook = (request, response) => {
    book.push(request.body);
    response.json(request.body);
}

// GET BOOK BY ID, REQUEST METHOD: GET
exports.getBookById = (request, response) => {
    let userIndex = book.find((user)=> user.id === parseInt(request.params.id))
    if(!userIndex){
        return response.json({
            error: "The given Id was not found."
        })
    }
    response.json(userIndex);
}

// UPDATE BOOK, REQUEST METHOD: PUT
exports.updateBook = (request, response) => {
    let userIndex = book.findIndex((user)=> user.id ===parseInt(request.params.id));
    if(userIndex === -1){
        return response.json({
            error: 'The given id was not found.'
        })
    }
    book[userIndex]['id'] = request.body.id;
    book[userIndex]['title'] = request.body.title;
    book[userIndex]['description'] = request.body.description;
    book[userIndex]['categoryId'] = request.body.categoryId;
    book[userIndex]['author'] = request.body.author;
    book[userIndex]['createdDate'] = request.body.createdDate;
    response.json(request.body);
}

// DELETE BOOK, REQUEST METHOD: DELETE
exports.deleteBook = (request, response) => {
    let userIndex = book.findIndex((user)=> user.id === parseInt(request.params.id));
    if(userIndex === -1){
        return response.json({
            error: 'The given id was not found.'
        })
    }
    book.splice(userIndex, 1);
    response.json({
        error: "The given Id was deleted."
    })
}


