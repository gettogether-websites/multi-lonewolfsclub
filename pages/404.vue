<script setup>
const route = useRoute()
const router = useRouter()
const page = route.fullPath

const goBack = () => {
    router.back()
}

useHead({
    title: 'Lone Wolfs Club - 404',
    description: 'Stránka chyby 404. Bohužel Vámi požadovanou stránku se nám nepodařilo nalézt, protože byla stažena nebo nikdy neexistovala.'
})
</script>
<template>
    <div class="error-w">
        <div class="content">
            <div class="text">
                <h1>Stránka "{{ page }}" nenalezena</h1>
                <h2>Error 404</h2>
                <p>Bohužel Vámi požadovanou stránku se nám nepodařilo nalézt, protože byla stažena nebo nikdy
                    neexistovala.</p>
                <h3>Nyní můžete:</h3>
                <ol>
                    <li>Zkusit znovu najít požadovanou stránku pomocí menu.</li>
                    <li>Zkontrolovat Vámi zadanou adresu.</li>
                    <li>Přejít na <nuxt-link to="/" title="Úvod">úvodní stránku</nuxt-link>.</li>
                    <li>Vrátit se o stránku <a href="/err" @click.prevent="goBack()">zpět</a>.</li>
                    <li>Kontaktovat nás a oznámit nám problém.</li>
                </ol>
                <div class="cta">
                    <SharedLinkBtn link="mailto:info@gettogether.cz" title="E-mail" class="mr-20">
                        <span class="material-symbols-outlined icon-small pr-10">mail</span> Kontaktujte nás
                    </SharedLinkBtn>
                </div>
                <p>Omlouváme se,<br />
                    a přejeme Vám hezký den.</p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.error-w {
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
}

.video-w {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
    background-color: black;

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 5;
    }
}

.text {
    padding: 80px 10px;
    color: #fff;

    h1 {
        font-size: 40px;
        margin-bottom: 0;
    }

    h2 {
        margin-top: 0;
        font-size: 32px;
        color: $color-primary;
        padding-left: 0;
    }

    h3 {
        padding-left: 0;
    }
}

a {
    color: #fff;
}

.cta {
    padding-top: 10px;
    display: flex;
    padding-bottom: 5px;
}
</style>