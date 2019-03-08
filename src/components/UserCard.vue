<template>
 <v-layout row>
    <v-btn color="pink" dark large absolute
      bottom left fab @click='GET_DATA'>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-for='(person,k) in persons' :key='k' class='cardUser'>
       
        <v-avatar
        :size="174"
        class='avatarUserPhoto'>
          <img
            v-bind:src="person.picture.large"
            height="300px">    
        </v-avatar>
         <v-card-text class="px-0"></v-card-text>    
        <v-card-title primary-title>
          <div>
            <div class="headline">{{person.name.first}} {{person.name.last}}</div>
            <span class="grey--text">1,000 miles of wonder</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Ubicación</v-btn>
          <v-btn flat color="purple">Más Informacíon</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        
        <v-slide-y-transition>
          <v-card-text v-show="show">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
        </v-slide-y-transition>
      </v-card> 
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapState,mapActions} from 'vuex';
  export default {
    data: () => ({
      show: false
    }),
    mounted(){
        this.$store.dispatch('GET_DATA')
    },
    computed:mapState(['persons']),
    methods:mapActions(['GET_DATA'])
  }
  
</script>

<style scoped>
 .cardUser{
   margin-top:12em;
   background-color: #7e7a769e
 }
 .avatarUserPhoto{
    margin-left: 19em;
    margin-top: 2em;
 }
 .v-card__title--primary {
    padding-top: 24px;
    background-color: #0C88D5;
    color: #d5e6e3;
    text-transform: uppercase;
}
.v-btn--bottom.v-btn--absolute.v-btn--large {
    bottom: 29px;
}
.v-avatar img{
      border: 5px white solid
}
</style>
