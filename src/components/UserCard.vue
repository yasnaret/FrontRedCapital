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
            <span class="black--text">
               <a v-bind:href="'mailto:' + person.email">{{person.email}}</a>
            </span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="white">Más Informacíon</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>
        
        <v-slide-y-transition>
          <v-card-text v-show="show">
             <v-expansion-panel >
    <v-expansion-panel-content class='black white--text'>
      <template v-slot:header>
        <div>DIRECCION</div>
      </template>
      <v-card>
        <v-card-text class='blue-grey lighten-5'>
          <address>
            <v-icon>home</v-icon>
              {{person.location.street}}
              {{person.location.city}}
              {{person.location.state}}
            </address>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
     <v-expansion-panel-content class='indigo lighten-3'>
      <template v-slot:header>
        <div>TELEFONO</div>
      </template>
      <v-card>
        <v-card-text class='blue-grey lighten-5'>
          <v-icon>phone</v-icon>
         {{person.phone}}
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
    <v-expansion-panel-content class='blue lighten-3 purple--text'>
      <template v-slot:header>
        <div>UBICACION</div>
      </template>
      <v-card>
        <v-card-text class='blue-grey lighten-5'>
          <div class="person__map">
            <iframe width="100%" height="170" frameborder="0" scrolling="no"
             marginheight="0" marginwidth="0" 
             v-bind:src="'https://maps.google.com/maps?q=' 
             + person.location.coordinates.latitude +','
              + person.location.coordinates.longitude + '&z=7&amp;output=embed'">
            </iframe>
          </div>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
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
   margin-top:8em;
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
.black--text a{
  color:black
}
.v-expansion-panel__header {
  
}
</style>
