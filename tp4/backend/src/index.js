import express, {
    json
} from 'express'
import router from './router'
import errorHandlers from './utils/errorHandlers'
import cors from 'cors'

let app = express()

app.use(json())
app.use(cors())

app.use('/api/', router)


if (app.get('env') === 'development')
    app.use(errorHandlers.notFound)

app.listen('8000', () => console.log("express listening on port 8000"))