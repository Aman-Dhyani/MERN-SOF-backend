import mongoose from 'mongoose'
import fbBtnsModel from '../model/fbbtnsModel.js'

const setFbBtns = async (req, resp) => {
    const { userId, sliderValue } = req.body

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        resp.status(404).json({ message: error.message })
    }

    try {
        const fbtn = await fbBtnsModel.insertMany({ userId: userId, navbarSlider: sliderValue })
        resp.status(200).json(fbtn)
    }

    catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

const updateFbBtns = async (req, resp) => {
    const { userId, sliderValue } = req.body


    if (!mongoose.Types.ObjectId.isValid(userId)) {
        resp.status(404).json({ message: error.message })
    }

    try {
        const fbtn = await fbBtnsModel.updateOne({ userId: userId }, { $set: { navbarSlider: sliderValue } })
        resp.status(200).json(fbtn)
    }
    catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

const fetchUpdatedBtnsData = async (req, resp) => {
    try {
        const fetchFbBtnssData = await fbBtnsModel.find()
        resp.status(200).json(fetchFbBtnssData)
    } catch (error) {
        resp.status(404).json({ message: error.message })
    }
}

export { setFbBtns, updateFbBtns, fetchUpdatedBtnsData }