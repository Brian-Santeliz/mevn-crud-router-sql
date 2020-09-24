<template>
<div class="row justify-content-center">
    <h1 class="text-center">Actualizar registro</h1>
    <div class="row fila">
        <div class="mx-auto my-5">
            <form action class="col-md-12 form-inline" @submit.prevent="updateRegister">
                <div class="form-group mx-sm-3">
                    <input type="text" name placeholder="Escribe tu nombre" class="form-control" v-model="form.Nombre_id" required />
                </div>
                <div class="form-group mx-sm-3">
                    <input type="text" name placeholder="Escribe tu apellido" class="form-control" v-model="form.Apellido_id" required />
                </div>
                <div class="form-group boton">
                    <button class="btn boton btn-success" type="submit">Actualizar</button>
                </div>
            </form>
        </div>
    </div>
</div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    data() {
        return {
            form: {},
        };
    },
    created() {
        this.axios.get(`/users/leer/${this.$route.params.id}`).then((res) => {
            this.form = res.data[0];
        });
    },
    methods: {
        updateRegister() {
            this.axios
                .put(`/users/modificar/${this.$route.params.id}`, this.form)
                .then((res) => {
                    Swal.fire(
                        "Actualizado",
                        "Registro actualizado correctamente!",
                        "success"
                    );
                    this.$router.push("/action");
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
