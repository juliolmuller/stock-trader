<template>
  <v-alert
    class="headline"
    color="info"
    dark
    icon="mdi-information-outline"
    prominent
    transition="scale-transition"
    :value="false"
  >
    As negociações na Volsa de Valores estão fechadas.
    Nenhuma alteração poderá ser salva neste período.
  </v-alert>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: mapGetters('storage', ['hasChanges']),
}
</script>

<style>

</style>
