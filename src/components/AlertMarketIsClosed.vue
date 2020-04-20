<template>
  <v-alert
    class="subtitle-1"
    color="info"
    dark
    icon="mdi-information-outline"
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
