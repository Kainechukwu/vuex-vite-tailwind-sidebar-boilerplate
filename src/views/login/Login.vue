<template>
    <div class="mx-6 max-w-[390px] w-full my-[174px]">
        <div class="mb-[72px]">
            <Logo />
        </div>

        <div class="grid grid-cols-1 gap-2">
            <div class="text-3xl font-semibold text-gray-900">Log In</div>
            <p @click="$router.push('/signup')" class="cursor-pointer mb-[32px] font-normal text-base text-gray-600">Don't have an account? <span class="font-bold">Sign Up</span></p>
            <form @submit.prevent="loginUser">
                <div class="grid grid-cols-1 gap-4">
                    <div class="col-span-1">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
                        <div class="mt-1">
                            <input
                                type="text"
                                name="email"
                                id="email"
                                autocomplete="off"
                                v-model="v$.email.$model"
                                :class="{
                                    'border-red-500': v$.email?.$errors[0]?.$message?.length > 0,
                                }"
                                class="block w-full border-gray-300 focus:border-gray-400 rounded-[4px] shadow-xs focus:outline-none focus:ring-0 sm:text-sm text-gray-900 font-normal"
                                aria-describedby="email-description"
                            />
                        </div>

                        <div class="text-red-400 mt-1 text-xs" v-for="error of v$.email.$errors" :key="error.$uid">
                            <div class="text-red-400">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>

                    <div class="col-span-1">
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <div class="mt-1 relative">
                            <input
                                :type="show ? 'text' : 'password'"
                                name="password"
                                id="password"
                                autocomplete="off"
                                v-model="v$.password.$model"
                                :class="{
                                    'border-red-500': v$.password?.$errors[0]?.$message?.length > 0,
                                }"
                                class="block w-full border-gray-300 focus:border-gray-400 rounded-[4px] shadow-xs focus:outline-none focus:ring-0 sm:text-sm text-gray-900 font-normal"
                                aria-describedby="password-description"
                            />

                            <EyeIcon @click="togglePassword" class="absolute inset-y-0 right-0" />
                        </div>

                        <div class="text-red-400 mt-1 text-xs" v-for="error of v$.password.$errors" :key="error.$uid">
                            <div class="text-red-400">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>

                <p @click="router.push('/forgot-password')" class="cursor-pointer font-normal text-sm text-[#4A5578] mt-[20px]">Forgot Password?</p>

                <button :disabled="submitLoading" type="submit" class="w-full brandButton mt-[40px]">Log In</button>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import EyeIcon from '/src/assets/svg/EyeIcon.vue'
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import { useRouter } from 'vue-router'
import Logo from '/src/components/reusable/SterlingLogo.vue'

const router = useRouter()
const submitLoading = ref(false)
const show = ref(false)

const form = reactive({
    email: '',
    password: '',
})

const rules = {
    password: {
        required: helpers.withMessage('Password is required', required),
    },

    email: {
        required: helpers.withMessage('Email is required', required),
    },
}

const v$ = useVuelidate(rules, form)

const loginUser = async () => {
    const validity = await v$.value.$validate()
    if (!validity) return
}

const togglePassword = () => {
    show.value = !show.value
    // document.getElementById('password').focus()
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
