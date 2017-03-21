let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create a schema
let taskSchema = new Schema({
    id: {type: String, required: true},
    description: {type: String},
    time: {type: String},
    priority: {type: Number, required: true},
    phase: {type: Number, required: true},
    isDescriptionEditing: {type: Boolean}
});
if (!taskSchema.options.toObject) taskSchema.options.toObject = {};
taskSchema.options.toObject.transform = function (doc, ret, options) {
    // remove the _id of every document before returning the result
    delete ret._id;
    delete ret.__v;
    return ret;
};


let Task = mongoose.model('Task', taskSchema);

module.exports = Task;