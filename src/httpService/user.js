import {GraphQLClient, gql} from 'graphql-request';
import {GQL_API_URL} from '../../app.json';
import _try from '../middleware/try';
import {getItem} from '../utils/StorageHandler';
import handleServerError from './handleServerError';

var client = new GraphQLClient(GQL_API_URL);

export const getAuthedUser = async () => {
  var result={}
  const token = await getItem('x-auth-token');
  const query = gql`
    query authUser {
      authUser {
        id
        auth_contact_name
        email
        mobile_number
      }
    }
  `;
  await client
    .request(
      query,
      {},
      {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    )
    .then(res => {
      result= {data: res.authUser, error: null};
    })
    .catch(err => {
      const result = handleServerError(err);
      result={data: null, error: result};
    });
    return result;
};