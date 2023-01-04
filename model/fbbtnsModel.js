import mongoose from 'mongoose'

const fbBtnSchema = mongoose.Schema({
    userId: { type: String },
    navbarSlider: { type: String },
})

const fbBtnModel = mongoose.model('fbBtns', fbBtnSchema)
export default fbBtnModel