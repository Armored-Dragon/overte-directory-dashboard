import express from 'express';
import path from 'path';
import * as places from "./features/api/places"
import * as domains from "./features/api/domains"
import 'dotenv/config'

const app = express();
const port = 6060;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async (req, res) => {
	res.render('html/index.ejs');
});

app.get('/places', async (req, res) => {
	const placesList = await places.getPlacesList();
	res.render('html/places.ejs', {placesList: placesList});
});

app.get('/domains', async (req, res) => {
	const domainList = await domains.getDomainList();
	res.render('html/domains.ejs', {domainList: domainList});
});

app.get('/login', (req, res) => {
	res.render('html/login.ejs');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
