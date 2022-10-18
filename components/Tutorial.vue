<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    hello
    <button>Click it</button>



  </div>
</template>

<script>
import { GRAPHQL_TRANSPORT_WS_PROTOCOL } from 'graphql-ws'
import { GraphQLWebSocketClient } from 'graphql-request'
import { request, gql } from 'graphql-request'



async function createClient(url) {
  return new Promise((resolve) => {
    const socket = new WebSocket(url, GRAPHQL_TRANSPORT_WS_PROTOCOL)
    const client = new GraphQLWebSocketClient(socket, {
      onAcknowledged: async (_p) => resolve(client),
    })
  })
}


export default {
  name: 'NuxtTutorial',
  data() {
    return {
      client: null
    }
  },
  async mounted() {
    this.client = await createClient("ws://localhost:3003/graphql")
    this.client.subscribe(gql`
              subscription {
                subscribeAllNotifications(input: {
                  userName: "user0"
                }) {
                  message
                  notificationType
                }

              }
        `,
        {
          next: (response) => {
            console.log("XXX " + JSON.stringify(response))
          },
          complete: () => {
            console.log("YYY complete")
          },
        }
    )

  },

}
</script>
