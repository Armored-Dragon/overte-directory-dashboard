import express from 'express';
import path from 'path';
import * as places from "./features/api/places"

const app = express();
const port = 6060;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'views')));

app.get('/', async (req, res) => {
	// TODO: List maturity categories;
	// TODO: View total amount of places
	// TODO: View total users
	// TODO: View total pages
	// TODO: Easy filter options
	const placesList = await places.getPlacesList();
	res.render('html/index.ejs', {placesList: placesList});
});

app.get('/places', async (req, res) => {
	// TODO: List maturity categories;
	// TODO: View total amount of places
	// TODO: View total users
	// TODO: View total pages
	// TODO: Easy filter options
	const placesList = await places.getPlacesList();
	res.render('html/places.ejs', {placesList: placesList});
});

app.get('/login', (req, res) => {
	res.render('html/login.ejs');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
