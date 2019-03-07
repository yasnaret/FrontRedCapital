<template>
  <v-app>
    <v-content>
      <Navbar/>
      <UserCard/>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import UserCard from './components/UserCard'

export default {
  name: 'App',
  components: {
    Navbar,
    UserCard
  },
  data () {
    return {
      //
    }
  }
}
</script>
