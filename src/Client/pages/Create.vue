<template>
<div class="row justify-content-center">
    <h1 class="text-center">Crear registros</h1>
    <div class="row fila">
        <div class="mx-auto my-5">
            <form action class="col-md-12 form-inline" @submit.prevent="addRegister">
                <div class="form-group mx-sm-3">
                    <input type="text" name placeholder="Escribe tu nombre" class="form-control" v-model="form.agregarnombre" required />
                </div>
                <div class="form-group mx-sm-3">
                    <input type="text" name placeholder="Escribe tu apellido" class="form-control" v-model="form.agregarapellido" required />
                </div>
                <div class="form-group boton">
                    <button class="btn boton btn-primary" type="submit">Confirmar</button>
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
            form: {
                agregarnombre: "",
                agregarapellido: "",
            },
        };
    },
    methods: {
        addRegister() {
            this.axios
                .post("/users/agregar", this.form)
                .then(() => {
                    Swal.fire("Guardado", "Registro agreagado correctamente!", "success");
                    this.$router.push("/action");
                    this.form = {
                        agregarnombre: "",
                        agregarapellido: "",
                    };
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
