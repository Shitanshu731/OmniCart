const { Schema } = require("mongoose");


const CategorySchema = new Schema({
    name: {type : stringify,required : true},

});

const Category = models?.Category || model('Category',CategorySchema);