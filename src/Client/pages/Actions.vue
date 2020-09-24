<template>
<div class="row">
    <h1 class="text-center mx-auto mb-5">Realiza acciones con los registros:</h1>
    <div class="col-md-9 mx-auto">
        <template v-if="Register.length > 0">
            <table class="table table-striped">
                <thead class="thead-info">
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="registro in Register" :key="registro.Registro_id">
                        <td>{{ registro.Nombre_id }}</td>
                        <td>{{ registro.Apellido_id }}</td>
                        <td>
                            <router-link :to="{name: 'update', params: { id: registro.Registro_id }}" class="btn btn-primary">
                                <i class="fas fa-user-edit"></i>
                            </router-link>
                            <button @click.prevent="deleteRegister(registro.Registro_id)" class="btn btn-danger">
                                <i class="fas fa-user-times"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
        <template v-else>
            <h3 class="text-center mt-3" style="text-decoration:underline">No hay registros creados</h3>
        </template>
    </div>
</div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    data() {
        return {
            Register: [],
        };
    },
    created() {
        this.axios
            .get("/users/leer")
            .then((res) => {
                this.Register = res.data;
            })
            .catch((error) => {
                console.log(error);
            });
    },
    methods: {
        deleteRegister(RegisotroId) {
            Swal.fire({
                title: "Eliminar",
                text: ` ¿Estas seguro en eliminar el registro con id: ${RegisotroId}?`,
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Eliminar",
            }).then((result) => {
                if (result.value) {
                    let idDelete = this.Register.findIndex(
                        (i) => i.Registro_id === RegisotroId
                    );

                    this.axios
                        .delete(`/users/borrar/${RegisotroId}`)
                        .then(() => {
                            Swal.fire(
                                "Eliminado",
                                "Registro eliminado correctamente!",
                                "success"
                            );
                            this.Register.splice(idDelete, 1);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            });
        },
    },
};
</script>
