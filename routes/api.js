const router = require('express').Router();
const authenticate = require('../middleware/verifyToken')

const AuthController = require('../controllers/AuthController')
const NoteController = require('../controllers/NoteController')
const UserController = require('../controllers/UserController')

router.get('/userDetails', authenticate, UserController.userDetails)

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.post('/createNote', authenticate, NoteController.createNote)

module.exports = router