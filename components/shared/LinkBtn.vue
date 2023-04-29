<script setup>
const props = defineProps({
    link: {
        type: String,
        required: false,
        default: ''
    },
    external: {
        type: Boolean,
        required: false,
        default: false
    },
    target: {
        type: String,
        required: false,
        default: '_self'
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
    theme: {
        type: String,
        required: false,
        default: 'light'
    }
})
</script>

<template>
    <div :class="['button', theme]">
        <a v-if="external" class="button-link" :href="link" :target="target" :title="title">
            <slot></slot>
        </a>
        <NuxtLink v-else class="button-link" :to="link" :target="target" :title="title">
            <slot></slot>
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.button {

    .button-link {
        padding: 8px 24px;
        border-radius: 32px;
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.4px;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: $button-bg-color;
        color: $color-text-white;
        transition: all 0.2s ease;

        &:hover {
            transform: translateY(-4px);
            background-color: $button-bg-color-hover;
            box-shadow: 0 10px 20px -10px $button-shadow-color;
        }
    }

    &.dark {
        .button-link {
            background-color: $button-bg-color-dark-theme;
            color: $color-text-dark-theme;

            &:hover {
                transform: translateY(-4px);
                background-color: $button-bg-color-dark-theme-hover;
                box-shadow: 0 10px 20px -10px $button-shadow-color-dark-theme;
            }
        }
    }
}
</style>