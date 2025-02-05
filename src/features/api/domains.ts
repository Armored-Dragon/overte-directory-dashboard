import 'dotenv/config'
import { getPlacesList } from './places'

const baseURL = process.env.BASE_URL;

// Due to permission issues from the current 'metaverse' implementation, we can not get a list of domains from the API.
// To get around this, we can get a list of domains by making a request to the API and maintaining a list of domains in the response. 
export async function getDomainList({
  perPage = 50,
  pageNum = 0,
} = {}): Promise<any> {
  let domains: any[] = [];
  // INFO: We are trying to get all of the places from the API in order to get a list of all of the domains.
  // This is not ideal, and this will be changed once we have permissions to access the metaverse domain API.
  // We could have the client make a request to the API for all of the domains, but that makes it no longer server-side rendering which is a goal of this project.
  const places = await getPlacesList({perPage: 2000});

  for (const place of places.data.places) {
    const domain = place.domain;

    // Check if the domain is already in the list of domains
    const isDomainInArrayAlready = domains.some(obj => obj["id"] === domain.id);

    // Add the domain to the list of domains
    if (!isDomainInArrayAlready) domains.push(domain);
  }

  return domains;
}