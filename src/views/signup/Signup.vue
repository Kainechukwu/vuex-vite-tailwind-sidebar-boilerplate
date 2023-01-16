<template>
    <div class="mx-6 max-w-[426px] w-full my-[117px]">
        <div class="mb-[72px]">
            <Logo />
        </div>
        <div class="grid grid-cols-1 gap-2">
            <div class="text-3xl font-semibold text-gray-800">Get Started</div>
            <p class="font-normal text-lg text-gray-600">To begin this journey, tell us what type of account you’d be opening.</p>
            <div class="mt-[27px] flex flex-col gap-[28px]">
                <div
                    @click="accountType = option.name"
                    v-for="option in options"
                    :key="option.name"
                    :class="option.name === accountType ? 'active' : 'inactive'"
                    class="cursor-pointer flex rounded-[6px] items-center justify-between gap-4 p-[20px]"
                >
                    <div>
                        <img :src="option.icon" class="z-[99] h-full" />
                    </div>
                    <div class="flex flex-grow flex-col">
                        <h4 class="text-gray-900 font-medium text-base">{{ option.name }}</h4>
                        <p class="text-sm text-gray-500 font-normal w-[90%] mt-1">{{ option.info }}</p>
                    </div>
                    <div class="flex items-start"><Tick :active="option.name === accountType" /></div>
                </div>
            </div>

            <button @click="goNext" class="w-full brandButton mt-[32px]">Next</button>
            <p @click="$router.push('/login')" class="cursor-pointer mt-[26px] text-center text-[#8692A6] font-normal text-sm">Already have an account? <span class="text-[#F23B55]">Sign In</span></p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Tick from '/src/assets/svg/UserTypeTick.vue'
import Logo from '/src/components/reusable/SterlingLogo.vue'

const router = useRouter()
const accountType = ref('Individual')

const options = [
    {
        name: 'Individual',
        icon: '/src/assets/svg/Individual.svg',
        info: 'Personal account to manage all you activities.',
    },
    {
        name: 'Vendor',
        icon: '/src/assets/svg/Vendor.svg',
        info: 'Own or belong to a company, this is for you.',
    },
]

const goNext = () => {
    // console.log(accountType)
    if (accountType.value === 'Individual') {
        router.push('/signup/individual')
    }
}
</script>

<style lang="scss" scoped>
.active {
    background: #f5f9ff;
    /* Gray cool / 300 */

    border: 1px solid #b9c0d4;
    box-shadow: 0px 4px 14px 1px rgba(0, 0, 0, 0.04);
}
.inactive {
    background: #ffffff;
    /* Gray/100 */

    border: 1px solid #f2f4f7;
    box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
}
</style>
