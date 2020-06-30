<template>
    <v-app>
        <v-app-bar app color="white">
            <v-tabs
                v-model="tabs"
                color="indigo"
                slider-color="indigo"
                class="elevation-2"
            >
                <v-tab href="#Visualizacao">Visualização</v-tab>
                <v-tab href="#Pecas">Peças</v-tab>

                <v-tab-item value="Visualizacao">
                    <v-carousel height="93.4vh">
                        <v-carousel-item
                            v-for="(model, index) in gltfModels"
                            :key="index"
                        >
                            <div class="text-center">
                                <span class="text-h5 indigo--text">
                                    {{ model.name }}
                                </span>
                            </div>
                            <model-gltf
                                backgroundColor="#a9f5e1"
                                :src="model.link"
                            ></model-gltf>
                        </v-carousel-item>
                    </v-carousel>
                </v-tab-item>

                <v-tab-item value="Pecas">
                    <pecas />
                </v-tab-item>
            </v-tabs>
        </v-app-bar>
    </v-app>
</template>

<script>
    import { ModelGltf } from "vue-3d-model"
    import pecas from "./components/Pecas.vue"

    export default {
        name: "App",
        components: {
            ModelGltf,
            pecas,
        },
        data: () => ({
            tabs: null,
            gltfModels: require("../../gltfModels.json"),
        }),
    }
</script>
