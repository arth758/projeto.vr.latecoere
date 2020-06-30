<template>
    <v-card color="#a9f5e1" height="93.4vh">
        <v-container>
            <v-row align="center" justify="center">
                <v-col cols="3"> </v-col>
                <v-col cols="6">
                    <v-card class="mx-4 my-8 pa-5">
                        <v-card-title>
                            Adição de Peças
                        </v-card-title>
                        <v-form ref="form" v-model="formGltf" lazy-validation>
                            <v-text-field
                                v-model="form.name"
                                name="name"
                                label="Nome da nova peça"
                                id="name"
                                required
                                color="indigo"
                            ></v-text-field>
                            <v-text-field
                                v-model="form.link"
                                name="link"
                                label="Link da nova peça (Formato: .gltf)"
                                id="link"
                                required
                                color="indigo"
                            ></v-text-field>
                            <v-btn color="indigo" @click="submit()" dark>
                                Adicionar
                            </v-btn>
                        </v-form>
                    </v-card>
                    <v-card class="mx-4 my-8 pa-5">
                        <v-card-title>
                            Exclusão de Peças
                        </v-card-title>
                        <v-form
                            ref="formDelete"
                            v-model="formDeleteGltf"
                            lazy-validation
                        >
                            <v-text-field
                                v-model="formDelete.name"
                                name="name"
                                label="Nome da peça"
                                id="name"
                                required
                                color="indigo"
                            ></v-text-field>

                            <v-btn color="error" @click="deleteGltf()" dark>
                                Remover
                            </v-btn>
                        </v-form>
                    </v-card>
                </v-col>
                <v-col cols="3"> </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
    import Services from "../services/GltfServices"

    export default {
        name: "Pecas",
        data: () => ({
            formGltf: false,
            formDeleteGltf: false,
            form: {
                name: "",
                link: "",
            },
            formDelete: {
                name: "",
            },
        }),
        methods: {
            async submit() {
                if (this.$refs.form.validate()) {
                    await Services.push(this.form)
                    this.form.name = ""
                    this.form.link = ""
                }
            },
            async deleteGltf() {
                if (this.$refs.formDelete.validate()) {
                    await Services.pop(this.formDelete)
                    this.formDelete.name = ""
                }
            },
        },
    }
</script>
