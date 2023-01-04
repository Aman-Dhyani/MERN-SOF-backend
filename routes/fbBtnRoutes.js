import express from 'express'
import { setFbBtns, updateFbBtns, fetchUpdatedBtnsData } from '../Authentication/fbBtns.js'

const fbBtnRoutes = express.Router()

fbBtnRoutes.patch('/fbBtns', setFbBtns)
fbBtnRoutes.patch('/fbUpdateBtns', updateFbBtns)
fbBtnRoutes.get('/fbUpdateBtns', fetchUpdatedBtnsData)
export default fbBtnRoutes