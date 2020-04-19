import app from './app'
import * as http from 'http'
const PORT = 3090

http.createServer({}, app).listen(PORT, () => {
  console.log('Game server listening on port ' + PORT)
})
