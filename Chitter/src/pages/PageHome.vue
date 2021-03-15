<template>
  <q-page class="relative-postion">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-px-sm q-py-lg row items-end q-col-gutter-md">
        <div class="col">
          <q-input 
            autogrow
            filled 
            bottom-slots 
            v-model="newChittContent" 
            placeholder="Type Here" 
            counter 
            maxlength="280"
            class="new-chitt"
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://media-exp1.licdn.com/dms/image/C4D35AQH-upoFjuvbgw/profile-framedphoto-shrink_100_100/0/1612728766616?e=1615302000&v=beta&t=nO4NTI9wEkoUrY2Rlkna4N9MbFz5ZtXinymnOOog3bY">
              </q-avatar>
            </template>
          </q-input>
        </div>



        <div class="col col-shrink">
          <q-btn 
            @click="addNewChitt"
            :disable= "!newChittContent"
            class="q-mb-lg"
            no-caps 
            unelevated 
            rounded 
            color="primary" 
            label="Send" 
          /> 
        </div>
      </div>
      <q-separator 
        class="divider"
        size= "10px"
        color="blue-7"
        />
      <q-list separator>
        <transition-group
          appear
          enter-active-class="animated fadeIn slower"
          leave-active-class="animated fadeOut slow"
        >
          <q-item 
            v-for="chitt in chitts"
            :key="chitt.date"
            class="q-py-md chitt" 
          >
            <q-item-section avatar top>
              <q-avatar>
                <img src="https://media-exp1.licdn.com/dms/image/C4D35AQH-upoFjuvbgw/profile-framedphoto-shrink_100_100/0/1612728766616?e=1615302000&v=beta&t=nO4NTI9wEkoUrY2Rlkna4N9MbFz5ZtXinymnOOog3bY">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1" >
                <strong>Vincent Healy</strong>
                <span class="text-grey-7">
                  @VincentCHealy 
                  <br class="lt-md"> &bull; {{ chitt.date | relativeDate}}
                </span>
              </q-item-label>
              <q-item-label class="chitter-content text-body1">
                {{chitt.content}}
              </q-item-label>
              <div class="chitt-icons row justify-between q-mt-sm">
                <q-btn flat round color="grey-5" icon="far fa-comment-dots" size="sm" />
                <q-btn flat round color="grey-5" icon="fas fa-retweet" size="sm" />
                <q-btn flat round color="grey-5" icon="far fa-heart" size="sm" />
                <q-btn 
                  @click="deleteChitt(chitt)"
                  flat 
                  round 
                  color="grey-5" 
                  icon="fas fa-trash" 
                  size="sm" 
                />
              </div>
            </q-item-section>

          </q-item>
        </transition-group>
          </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { formatDistance  } from 'date-fns'

export default {
  name: 'PageHome',
  data() {
    return {
      newChittContent: '',
      chitts: [
        {
        content: 'As part of my training in how to use Javascript, Quasar Framework, Vue.js. I thought this tutorial would be an ideal project The construction of a Twitter Client',
        date: 1615217039922
        },
        {
        content: 'This tutorial moves into setting up the database online using Firebase. I have stopped at that point, now I can go over the code.',
        date: 1615217059361
        },
        {
        content: 'Make changes to see what happens and to see if I can break something, then fix it. Oh I could compare it to the tutors, as I used different naming to his.',
        date: 1615217079117
        }
      ]
    }
  },
  methods: {
    addNewChitt(){
      let newChitt = {
      content: this.newChittContent,
      date: Date.now()
      }
      this.chitts.unshift(newChitt)
      this.newChittContent = ''
    },

    deleteChitt(chitt){
      console.log('Document successfully deleted!', chitt)
      let dateToDelete = chitt.date
      let index = this.chitts.findIndex(chitt => chitt.date === dateToDelete)
      console.log('index: ', index)
      this.chitts.splice(index, 1)
    }
  },
  filters: {
    relativeDate(value){
      return formatDistance(value, new Date())
    }
  }
}
</script>
<style lang="sass">
.new-chitt
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $blue-5
.chitt:not(:first-child)
  border-top: 1px solid
  border-color: $blue-5
.chitter-content
  white-space: pre-line
.chitt-icons
  margin-left: -5px
</style>