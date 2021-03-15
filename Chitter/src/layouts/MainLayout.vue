<template>
  <q-layout view="lHr lpR fFf">

    <q-header reveal bordered class="bg-blue-7">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-xs absolute-center ">{{ $route.name }}</span>
          <q-icon class="header-icon q-pa-md lt-sm" name="fas fa-teeth" size="sm" color="white" />
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" 
      :width="180"
      bordered>
      <q-icon class="q-pa-md" name="fas fa-teeth" size="lg" color="primary" />
        <q-list>

          <q-item to="/" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="house" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 ">Home</q-item-section>
          </q-item>

          <q-item to="/bookmarks" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="far fa-bookmark" size="md" />
            </q-item-section>
            <q-item-section class="text-h6 ">Bookmarks</q-item-section>
          </q-item>

          <q-item to="/explore" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fab fa-cc-discover" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">Explore</q-item-section>
          </q-item>

          <q-item to="/lists" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="far fa-list-alt" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">Lists</q-item-section>
          </q-item>

          <q-item to="/messages" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="far fa-sticky-note" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">Messages</q-item-section>
          </q-item>

          <q-item to="/notifications" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="far fa-flag" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">Notifications</q-item-section>
          </q-item>

          <q-item to="/profile" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="far fa-id-card" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">Profile</q-item-section>
          </q-item>

          <q-item to="/settings" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-sliders-h" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">Settings</q-item-section>
          </q-item>

          <q-item to="/about" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="fas fa-meteor" size="md" />
            </q-item-section>
            <q-item-section class="text-h6">About</q-item-section>

          </q-item>
        </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <q-input rounded outlined class="q-ma-md" placeholder="Search" dense >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>

      <q-list separator padding>
        <q-item class="q-pa-md">
            <q-item-section>
              <q-item-label overline class="text-grey-5">Coding</q-item-label>
              <q-item-label class="text-weight-bold" >A mixup of code styles</q-item-label>
              <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
       <q-item class="q-pa-md">
            <q-item-section>
              <q-item-label overline class="text-grey-5">Coding</q-item-label>
              <q-item-label class="text-weight-bold" >A mixup of code styles</q-item-label>
              <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
            <q-item-section>
              <q-item-label overline class="text-grey-5">Coding</q-item-label>
              <q-item-label class="text-weight-bold" >A mixup of code styles</q-item-label>
              <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
            <q-item-section>
              <q-item-label overline class="text-grey-5">Coding</q-item-label>
              <q-item-label class="text-weight-bold" >A mixup of code styles</q-item-label>
              <q-item-label caption>Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>