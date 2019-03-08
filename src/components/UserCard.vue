<template>
 <v-layout row>
    <v-btn color="pink" dark small absolute
      bottom left fab @click='GET_DATA'>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-flex xs12 sm6 offset-sm3>
      <v-card v-for='(person,k) in persons' :key='k'>
        <v-img
          v-bind:src="person.picture.large"
          height="200px"
        >
        </v-img>
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