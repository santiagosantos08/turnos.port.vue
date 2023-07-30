<template>
    <h1>Registrarse</h1>
    <p><input type="email" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Contraseña" v-model="password" /></p>
    <p><button @click="register">Crear Cuenta</button></p>
    <p><button @click="signInWithGoogle">Entrar con Google</button></p>
</template>

<script setup>
    import {ref} from "vue";
    import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
    import {useRouter} from 'vue-router';
    const email = ref("");
    const password = ref("");
    const router = useRouter();

    const register =()=>{
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data)=>{
                console.log("registrado correctamente - email y pass");
                router.push('/AboutView');
            })
            .catch((error)=>{
                console.log(error.code);
                alert(error.message);
            });
    }

    const signInWithGoogle =()=>{

    }
</script>