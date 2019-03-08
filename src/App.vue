<template>
  <v-app>
    <v-content>
      <UserCard/>
    </v-content>
  </v-app>
</template>

<script>
import UserCard from './components/UserCard'
export default {
  name: 'App',
  components: {
    UserCard,
  },
  data () {
    return {
      //
    }
  }
}
</script>
