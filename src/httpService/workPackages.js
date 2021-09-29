import {GraphQLClient, gql} from 'graphql-request';
import {GQL_API_URL} from '../../app.json';
import _try from '../middleware/try';
import {getItem} from '../utils/StorageHandler';
import handleServerError from './handleServerError';

var client = new GraphQLClient(GQL_API_URL);

export const getWorkPackages = _try(async type => {
  const token = await getItem('x-auth-token');
  const query = gql`
    query packages {
      packages(type: "${type}") {
        id
        name
        short_description
        description
        value
        buyer {
          id
          auth_contact_name
          email
        }
        supplier {
          id
          auth_contact_name
          email
        }
      }
    }
  `;
  const response = await client.request(
    query,
    {},
    {Accept: 'application/josn', Authorization: `Bearer ${token}`},
  );
  const result = handleServerError(response);
  if (result) return {data: null, error: result};
  return {data: response.packages, error: null};
});
