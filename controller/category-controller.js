let category = [];

// GET ALL BOOK, REQUEST METHOD: GET
exports.getAllCategory = (request, response) => {
    response.json(category);
}

// CREATE CATORGORY, REQUEST METHOD: POST
exports.createCategory = (request, response) => {
    category.push(request.body);
    response.json(request.body);
}

// GET BOOK BY BOOK, REQUEST METHOD: GET
exports.getById = (request, response) => {
    let userIndex = category.find((user)=> user.id === parseInt(request.params.id))
    if(!userIndex){
        return response.json({
            error: "The given ID was not found."
        })
    }
    response.json(userIndex);
}

// UPDATE BOOK, REQUEST METHOD: PUT
exports.updateCategory = (request, response) => {
    let userIndex = category.findIndex((user)=> user.id ===parseInt(request.params.id));
    if(userIndex === -1){
        return response.json({
            error: "The given id was not found."
        })
    }
    category[userIndex]['id'] =request.body.id;
    category[userIndex]['name'] =request.body.name;
    category[userIndex]['email'] =request.body.email;
    category[userIndex]['address'] =request.body.address;
    response.json(request.body);
}

// DELETE CATEGORY, REQUEST METHOD: DELETE
exports.deleteCategory = (request, response) => {
    let userIndex = category.findIndex((user)=> user.id ===parseInt(request.params.id));
    if(userIndex === -1){
        return response.json({
            error: 'The given id was not found.'
        })
    }
    category.splice(userIndex, 1);
    response.json("The id was deleted");
}


