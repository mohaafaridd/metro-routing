import * as express from 'express';
import * as path from 'path';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '..', 'client', 'build', 'index.html')
    );
  });
}

app.listen(PORT, () => console.log(`Server started`));
