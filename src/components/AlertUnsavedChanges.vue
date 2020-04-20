<template>
  <v-alert
    class="subtitle-1"
    color="warning"
    dark
    icon="mdi-alert-decagram-outline"
    transition="scale-transition"
    :value="hasChanges"
  >
    Você tem alterações não salvas na sua carteira de ações.
    Se você fechar o navegador ou esta aba de navegação, todas as alterações serão perdidas.
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
