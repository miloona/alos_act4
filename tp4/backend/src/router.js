import express from 'express'
import validation from './utils/validation'
import HelipaddyController from './Controllers/HelipaddyController'
import HostController from './Controllers/HostController'

const router = express.Router()

// Helipaddy

router.get('/Helipaddy', HelipaddyController.get_all)

router.get('/Helipaddy/:id',
    ...validation.get_Helipaddy,
    HelipaddyController.get)

router.post('/Helipaddy',
    ...validation.create_Helipaddy,
    HelipaddyController.create)

router.put('/Helipaddy/:id',
    ...validation.update_Helipaddy,
    HelipaddyController.update)
router.delete('/Helipaddy/:id',
    ...validation.delete_Helipaddy,
    HelipaddyController.delete) //deletes hosts too


// hosts

router.get('/Helipaddy/:id/hosts',
    HostController.get
)

router.post('/Helipaddy/:id/hosts',
    ...validation.create_host,
    HostController.create)


export default router;