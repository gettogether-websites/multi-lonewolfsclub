<template>
    <!-- Pre označenie hlavičky stránky sa vždy používa tag "header" -->
    <header class="header">
        <!-- Logo je opäť zdieľaný komponent. Logo spoločnosti je dôležitá súčasť webu a mala by byť obalená odkazom na hlavnú stránku. 
        Title odkazu by sa mal zhodovať s doménou (napr. gettogether.cz). Ak je obrázok loga zobrazený pomocou tagu img,
        jeho alt by mal byť názov spoločnosti so suffixom "logo" (Gettogether s.r.o. - logo) -->
        <SharedLogoLink class="logo" color="white" />

        <!-- Navigácie sa označujú tagom "nav". Každý odkaz má title aby bolo jasné, kam smeruje. Viď info na stránke index.vue. V hlavnej navigácii je 
        zaužívané, že title je zhodný s textom odkazu. -->
        <nav class="menu">
            <NuxtLink class="menu-link" to="/" title="Úvod">Úvod</NuxtLink>
            <NuxtLink class="menu-link" to="/" title="Služby">Služby</NuxtLink>
            <NuxtLink class="menu-link" to="/" title="Technologie">Technologie</NuxtLink>
            <NuxtLink class="menu-link" to="/" title="O nás">O nás</NuxtLink>
            <NuxtLink class="menu-link" to="/" title="Kontakt">Kontakt</NuxtLink>
        </nav>

        <!-- Telefónne číslo nie je súčasťou navigácie, preto nie je v tagu "nav". -->
        <div class="header-contact">
            <!-- info o tomto komponente je v index.vue -->
            <SharedLinkBtn link="tel:+420775146432" title="Telefon" theme="dark">
                <span class="material-symbols-outlined icon-small pr-10">phone_enabled</span> Kontakt
            </SharedLinkBtn>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    height: 100%;
    width: auto;
    padding: 20px 40px;
}

.menu {
    display: flex;
}

.menu-link {
    text-decoration: none;
    display: block;
    color: $color-text-dark-theme;
    padding: 10px 20px;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        opacity: 0.8;
    }

    /* &.router-link-exact-active::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 2px;
        left: 50%;
        margin-left: -10px;
        background-color: $color-text-dark-theme;
    } */
}

.header-contact {
    padding: 0 40px;
    display: flex;
}
</style>