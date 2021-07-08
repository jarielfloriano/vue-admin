<template>
  <v-container
    id="typography-view"
    fluid
    tag="section"
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <material-card
          color="success"
        >
          <template #heading>
            <div class="pa-6 white--text">
              <div class="text-h4 font-weight-light">
                Texto 2
              </div>

              <div class="text-subtitle-1">
                Subtítulo pequeno 2
              </div>
            </div>
          </template>

          <v-card-text class="text--primary">
            <v-row>
              <v-col>
                <p>Testando um conteúdo 2</p>
              </v-col>
            </v-row>
          </v-card-text>
        </material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Menu2',
    data: () => ({

    }),
  }
</script>
