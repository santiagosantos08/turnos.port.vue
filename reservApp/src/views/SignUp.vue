<template>
    <h1>Registrarse.</h1>
    <div class="item">
        <p><input type="email" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Contraseña" v-model="password" /></p>
        <p><button @click="register">Crear Cuenta</button></p>
        <p><button @click="signInWithGoogle">Entrar con Google</button></p>
    </div>
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

<style>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }
}
</style>