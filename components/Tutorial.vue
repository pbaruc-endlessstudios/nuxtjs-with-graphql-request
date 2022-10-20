<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    hello
    <button @click="doIt">Click it</button>
  </div>
</template>

<script>
import { GRAPHQL_TRANSPORT_WS_PROTOCOL } from 'graphql-ws'
import {GraphQLClient, GraphQLWebSocketClient} from 'graphql-request'
import { request, gql } from 'graphql-request'

async function createClient(url) {
  return new Promise((resolve) => {
    const socket = new WebSocket(url, GRAPHQL_TRANSPORT_WS_PROTOCOL)
    const client = new GraphQLWebSocketClient(socket, {
      onAcknowledged: async (_p) => resolve(client),
    })
  })
}

async function createRegularClient(url) {
  return new GraphQLClient(url, {
    headers: {
      authorization: 'Bearer 859.4008735587257'
    }
  })
}

export default {
  methods: {
    doIt: async function() {
      this.$graphqlRequest();
    //   const data = await this.$graphqlRequest.httpClient.request(gql`
    //         {
    //           getUserPathwayById(input: { user_pathway_id: 3854 }) {
    //             user_pathway_nodes {
    //                 node {
    //                   id
    //                   name
    //                   object_id
    //                   entity_id
    //                   pathway_node_type_id
    //                   is_optional
    //                   is_root
    //                   due_date
    //                   pathwayNodeObject {
    //                     __typename
    //                     ... on Event {
    //                       id
    //                       name
    //                       about
    //                       tags
    //                       image_url
    //                       live
    //                       date
    //                       location
    //                       location_text
    //                       group_id
    //                       zone
    //                       duration
    //                       participants {
    //                         id
    //                       }
    //                       project {
    //                         id
    //                         name
    //                       }
    //                     }
    //                     ... on Task {
    //                       id
    //                       name
    //                       description
    //                       required_skills
    //                       due_date
    //                       instances_count
    //                       project_id
    //                       max_instances
    //                       instances_count
    //                       short_description
    //                       status_id
    //                       effort
    //                       disciplines {
    //                         id
    //                         name
    //                       }
    //                       project {
    //                         id
    //                         name
    //                         thumbnail_image_url
    //                       }
    //                     }
    //                   }
    //                 }
    //
    //             }
    //           }
    //         }
    // `);
    //   console.log(JSON.stringify(data, undefined, 4));
    //   console.log("hello");

    },

  }


}
</script>
