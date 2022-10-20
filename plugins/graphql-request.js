import {GraphQLClient, GraphQLWebSocketClient} from 'graphql-request'
import {GRAPHQL_TRANSPORT_WS_PROTOCOL} from "graphql-ws";



const myAwesomePlugin = (stuff) => {
  const httpClient = new GraphQLClient(process.env.GRAPHQL_BASEURL, {
    headers: {
      authorization: 'Bearer 120.1575384001019'
    }
  });

  return {
    httpClient

  }

}



export default(_, inject) => {
  inject('graphqlRequest', (params) => {
    console.log('here: ' + JSON.stringify(params))
  })
}
