<script setup>
const props = defineProps({
    color: {
        type: String,
        required: false,
        default: '#000333'
    }
})
</script>

<template>
    <!-- Logo je opäť zdieľaný komponent. Logo spoločnosti je dôležitá súčasť webu a mala by byť obalená odkazom na hlavnú stránku. 
        Title odkazu by sa mal zhodovať s doménou (napr. gettogether.cz). Ak je obrázok loga zobrazený pomocou tagu img,
        jeho alt by mal byť názov spoločnosti so suffixom "logo" (Gettogether s.r.o. - logo) -->
    <NuxtLink class="logo" to="/" title="gettogether.cz">
        <svg width="101" height="139" viewBox="0 0 101 139" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M81.6058 138.73C92.122 138.73 100.647 130.205 100.647 119.688C100.647 109.172 92.122 100.647 81.6058 100.647C71.0895 100.647 62.5645 109.172 62.5645 119.688C62.5645 130.205 71.0895 138.73 81.6058 138.73ZM81.7086 126.996C85.6877 126.996 88.9134 123.77 88.9134 119.791C88.9134 115.812 85.6877 112.586 81.7086 112.586C77.7295 112.586 74.5038 115.812 74.5038 119.791C74.5038 123.77 77.7295 126.996 81.7086 126.996Z"
                :fill="color" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M50.3235 100.647C78.1164 100.647 100.647 78.1164 100.647 50.3235C100.647 22.5306 78.1164 0 50.3235 0C22.5306 0 0 22.5306 0 50.3235C0 78.1164 22.5306 100.647 50.3235 100.647ZM50.5955 69.6369C61.1118 69.6369 69.6369 61.1118 69.6369 50.5955C69.6369 40.0793 61.1118 31.5542 50.5955 31.5542C40.0793 31.5542 31.5542 40.0793 31.5542 50.5955C31.5542 61.1118 40.0793 69.6369 50.5955 69.6369Z"
                :fill="color" />
            <circle cx="93.1628" cy="7.20483" r="7.20483" :fill="color" />
        </svg>
        <div class="logo-text">
            <div class="logo-text-up" :style="{ color }">Gettogether</div>
            <div class="logo-text-bottom" :style="{ color }">technology</div>
        </div>
    </NuxtLink>
</template>

<style lang="scss" scoped>
.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

svg {
    height: 40px;
    width: auto;
}

.logo-text {
    padding-left: 10px;
}

.logo-text-up {
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.2px;
}

.logo-text-bottom {
    font-size: 8px;
    letter-spacing: 1px;
    text-align: right;
}
</style>