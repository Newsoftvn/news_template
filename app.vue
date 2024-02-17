<template>
    <div>
        <NuxtPage />
    </div>
</template> 
<script setup lang="ts">
import '~/assets/css/bootstrap.min.css'
import '~/assets/css/font-awesome.css'
import '~/assets/css/slick.css'
import '~/assets/css/slick-theme.css'
import '~/assets/css/base.css'
import '~/assets/css/plugins.css'
import '~/assets/css/style.css'
useHead({
    title: 'My App',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [
        {
            src: '/js/modernizr.min.js',
            type: 'text/javascript',
            async: true,
            defer: true
        },
        {
            src: '/js/jquery.js',
            type: 'text/javascript',
            async: true,
            defer: false
        },
        {
            src: '/js/bootstrap.min.js',
            type: 'text/javascript',
            async: true,
            defer: false
        },
        {
            src: '/js/slick.min.js',
            type: 'text/javascript',
            async: true,
            defer: false
        },
        {
            src: '/js/tweenmax.min.js',
            type: 'text/javascript',
            async: true,
            defer: false
        },
        {
            src: '/js/js.cookie.js',
            type: 'text/javascript',
            async: true,
            defer: false
        },
        {
            src: '/js/jquery.style.switcher.js',
            type: 'text/javascript',
            async: true,
            defer: false
        }
    ],
})

useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})
</script>