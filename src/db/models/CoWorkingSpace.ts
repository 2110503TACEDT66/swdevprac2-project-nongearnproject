import mongoose from "mongoose";

const CoWorkingSpaceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
    },
    address: {
        type: String,
        required: [true, 'Please add an address']
    },
    tel: {
        type: String
    },
    open_time: {
        type: Date,
        required: [true, 'Please add an open time']
    },
    close_time: {
        type: Date,
        required: [true, 'Please add a close time']
    }
});

const CoWorkingSpace = mongoose.models.CoWorkingSpace || mongoose.model("CoWorkingSpace", CoWorkingSpaceSchema)
export default CoWorkingSpace