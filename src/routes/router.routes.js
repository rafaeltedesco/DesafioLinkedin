import express from 'express'
import coursesController from '../controllers/courses.controller.js'


const router = express.Router()

router.route('/')
  .get(coursesController.getCourses)
router.route('/search')
  .get(coursesController.getCoursesByQuery)

export { router }