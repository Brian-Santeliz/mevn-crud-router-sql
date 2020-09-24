<template>
<div>
    <nav class="navbar navbar-dark bg-success justify-content-between flex-nowrap flex-row">
        <div class="container">
            <router-link to="/" class="navbar-brand float-left">Actividad 3</router-link>
            <ul class="nav navbar-nav flex-row float-right">
                <li>
                    <router-link class="nav-link text-white font-weight-bold" to="/action">Acciones</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <div class="container mt-5">
        <router-view />
    </div>
</div>
</template>
