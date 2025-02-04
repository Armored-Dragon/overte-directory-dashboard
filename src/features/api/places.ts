let baseURL = `https://mv.overte.org/server/`


export async function getPlacesList({
  maturity = null,
  tag = null,
  perPage = 50,
  pageNum = 0,
  order = "",
  search = "",
  status = "",
  onlyMyPlaces = false
} = {}): Promise<any> {
  // FIXME: onlyMyPlaces is unused.
  let completeURL = `${baseURL}/api/v1/places?`;
  
  if (maturity) completeURL += `maturity=${maturity}&`;
  if (tag) completeURL += `tag=${tag}&`;
  if (perPage) completeURL += `per_page=${perPage}&`;
  if (pageNum) completeURL += `page_num=${pageNum}&`;
  if (order) completeURL += `order=${order}&`;
  if (search) completeURL += `search=${search}&`;
  if (status) completeURL += `status=${status}&`;

  // Remove the trailing '&' from the URL
  if (completeURL.endsWith('&')) {
    completeURL = completeURL.slice(0, -1);
  }

  const response = await fetch(completeURL);
  const placesList = await response.json();

  return placesList;
}