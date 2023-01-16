<template>
    <div class="mx-6 max-w-[520px] w-full my-[40px]">
        <div class="mb-[72px]">
            <Logo />
        </div>

        <GoBack @click="goBack" class="mb-[50px]" text="Back" />
        <div class="grid grid-cols-1 gap-2">
            <div class="text-3xl font-semibold text-gray-900">Create an Account</div>
            <p @click="$router.push('/login')" class="cursor-pointer mb-[32px] font-normal text-base text-gray-600">Already have an account? <span class="font-bold">Log In.</span></p>
            <form @submit.prevent="signupUser">
                <div class="grid grid-cols-2 gap-4">
                    <div class="col-span-1">
                        <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
                        <div class="mt-1">
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                autocomplete="off"
                                v-model="v$.firstName.$model"
                                :class="{
                                    'border-red-500': v$.firstName?.$errors[0]?.$message?.length > 0,
                                }"
                                class="block w-full border-gray-300 focus:border-gray-400 rounded-[4px] shadow-xs focus:outline-none focus:ring-0 sm:text-sm text-gray-900 font-normal"
                                aria-describedby="firstName-description"
                            />
                        </div>

                        <div class="text-red-400 mt-1 text-xs" v-for="error of v$.firstName.$errors" :key="error.$uid">
                            <div class="text-red-400">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
                        <div class="mt-1">
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                autocomplete="off"
                                v-model="v$.lastName.$model"
                                :class="{
                                    'border-red-500': v$.lastName?.$errors[0]?.$message?.length > 0,
                                }"
                                class="block w-full border-gray-300 focus:border-gray-400 rounded-[4px] shadow-xs focus:outline-none focus:ring-0 sm:text-sm text-gray-900 font-normal"
                                aria-describedby="lastName-description"
                            />
                        </div>

                        <div class="text-red-400 mt-1 text-xs" v-for="error of v$.lastName.$errors" :key="error.$uid">
                            <div class="text-red-400">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
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
                        <label for="phoneNo" class="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div class="mt-1 relative">
                            <input
                                type="text"
                                name="text"
                                id="phoneNo"
                                autocomplete="off"
                                v-model="v$.phoneNo.$model"
                                :class="{
                                    'border-red-500': v$.phoneNo?.$errors[0]?.$message?.length > 0,
                                }"
                                class="pl-[88px] block w-full border-gray-300 focus:border-gray-400 rounded-[4px] shadow-xs focus:outline-none focus:ring-0 sm:text-sm text-gray-900 font-normal"
                                aria-describedby="phoneNo-description"
                            />

                            <!-- --------- -->

                            <div class="w-[80px] absolute inset-y-0 left-0 flex items-center pointer-events-none border-r border-gray-300 cursor-pointer">
                                <Listbox as="div" class="w-full" v-model="selectedCode">
                                    <div class="relative">
                                        <ListboxButton
                                            class="relative flex gap-2 w-full cursor-default rounded-[4px] pl-2 py-2 text-right focus:outline-none focus:ring-0 sm:text-sm font-normal text-gray-600"
                                        >
                                            <span class="pointer-events-none flex items-center pr-2">
                                                <!-- <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" /> -->
                                                >
                                            </span>
                                            <span class="block truncate">{{ selectedCode.code }}</span>
                                        </ListboxButton>

                                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                            <ListboxOptions
                                                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                                            >
                                                <ListboxOption as="template" v-for="code in areaCodes" :key="code.id" :value="code" v-slot="{ active, selectedCode }">
                                                    <li :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
                                                        <span :class="[selectedCode ? 'font-semibold' : 'font-normal', 'block truncate']">{{ code.code }}</span>

                                                        <span v-if="selectedCode" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                            <!-- <CheckIcon class="h-5 w-5" aria-hidden="true" /> -->
                                                        </span>
                                                    </li>
                                                </ListboxOption>
                                            </ListboxOptions>
                                        </transition>
                                    </div>
                                </Listbox>
                            </div>

                            <!-- --------- -->
                        </div>

                        <div class="text-red-400 mt-1 text-xs" v-for="error of v$.phoneNo.$errors" :key="error.$uid">
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

                    <div class="col-span-1">
                        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div class="mt-1 relative">
                            <input
                                :type="showConfirmPassword ? 'text' : 'password'"
                                name="confirmPassword"
                                id="confirmPassword"
                                autocomplete="off"
                                v-model="v$.confirmPassword.$model"
                                :class="{
                                    'border-red-500': v$.confirmPassword?.$errors[0]?.$message?.length > 0,
                                }"
                                class="block w-full border-gray-300 focus:border-gray-400 rounded-[4px] shadow-xs focus:outline-none focus:ring-0 sm:text-sm text-gray-900 font-normal"
                                aria-describedby="confirmPassword-description"
                            />

                            <EyeIcon @click="toggleConfirmPassword" class="absolute inset-y-0 right-0" />
                        </div>

                        <div class="text-red-400 mt-1 text-xs" v-for="error of v$.confirmPassword.$errors" :key="error.$uid">
                            <div class="text-red-400">
                                {{ error.$message }}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 mt-[18px]">
                    <div class="flex items-center gap-2">
                        <CheckedIcon :isTrue="form.password.length !== 0 && Util.hasLowerCase(form.password)" />
                        <p :class="form.password.length === 0 ? '' : Util.hasLowerCase(form.password) ? 'text-gray-500' : 'text-[#F45D72]'" class="font-normal text-xs text-gray-400">
                            one lowercase character
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <CheckedIcon :isTrue="form.password.length !== 0 && Util.hasMinEightCharacters(form.password)" />
                        <p :class="form.password.length === 0 ? '' : Util.hasMinEightCharacters(form.password) ? 'text-gray-500' : 'text-[#F45D72]'" class="font-normal text-xs text-gray-400">
                            8 characters minimum
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <CheckedIcon :isTrue="form.password.length !== 0 && Util.hasUpperCase(form.password)" />
                        <p :class="form.password.length === 0 ? '' : Util.hasUpperCase(form.password) ? 'text-gray-500' : 'text-[#F45D72]'" class="font-normal text-xs text-gray-400">
                            one uppercase character
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <CheckedIcon :isTrue="form.password.length !== 0 && Util.hasSpecialChar(form.password)" />
                        <p :class="form.password.length === 0 ? '' : Util.hasSpecialChar(form.password) ? 'text-gray-500' : 'text-[#F45D72]'" class="font-normal text-xs text-gray-400">
                            one special character
                        </p>
                    </div>
                    <div class="flex items-center gap-2">
                        <CheckedIcon :isTrue="form.password.length !== 0 && Util.containsNumbers(form.password)" />
                        <p :class="form.password.length === 0 ? '' : Util.containsNumbers(form.password) ? 'text-gray-500' : 'text-[#F45D72]'" class="font-normal text-xs text-gray-400">one number</p>
                    </div>
                </div>

                <button
                    :class="submitLoading || v$.$invalid ? 'opacity-25' : 'opacity-100'"
                    :disabled="submitLoading || v$.$invalid"
                    type="submit"
                    @click="goNext"
                    class="w-full brandButton mt-[32px]"
                >
                    Continue
                </button>

                <!-- <span>{{ v$.$invalid }}</span> -->
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { Util } from '/src/util'
import useVuelidate from '@vuelidate/core'
import { required, helpers, minLength, sameAs, email } from '@vuelidate/validators'
import GoBack from '/src/components/reusable/GoBack.vue'
import { useRouter } from 'vue-router'
import Tick from '/src/assets/svg/UserTypeTick.vue'
import Logo from '/src/components/reusable/SterlingLogo.vue'
import EyeIcon from '/src/assets/svg/EyeIcon.vue'
import CheckedIcon from '/src/assets/svg/PasswordChecked.vue'

import {
    Listbox,
    ListboxButton,
    // ListboxLabel,
    ListboxOption,
    ListboxOptions,
} from '@headlessui/vue'
import VuePassword from 'vue-password'

const router = useRouter()
const submitLoading = ref(false)
const show = ref(false)
const showConfirmPassword = ref(false)
const areaCodes = [
    {
        id: 1,
        code: '234',
        icon: '',
    },
]

const selectedCode = ref(areaCodes[0])
const form = reactive({
    email: '',

    firstName: '',
    lastName: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
})

const rules = {
    firstName: {
        required: helpers.withMessage('First name is required', required),
    },
    lastName: {
        required: helpers.withMessage('Last name is required', required),
    },
    phoneNo: {
        required: helpers.withMessage('Phone number is required', required),
    },

    email: {
        required: helpers.withMessage('Email is required', required),
        email: helpers.withMessage('Email is invalid', email),
    },
    password: {
        required: helpers.withMessage('Password is required', required),
        // containsPasswordRequirement: helpers.withMessage(
        //     () => `The password requires an uppercase, lowercase, number and special character`,
        //     (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value)
        // ),
        containsPasswordRequirement: (value) => /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/.test(value),
        minLength: minLength(8),
    },
    confirmPassword: {
        required: helpers.withMessage('Confirm password is required', required),
        sameAs: helpers.withMessage('Passwords do not match', sameAs(computed(() => form.password))),
    },
}

const v$ = useVuelidate(rules, form)

const signupUser = async () => {
    const validity = await v$.value.$validate()
    if (!validity) return
}

const togglePassword = () => {
    show.value = !show.value
    // document.getElementById('password').focus()
}
const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
    // document.getElementById('password').focus()
}

const goNext = () => {
    router.push('/signup/individual')
}
const goBack = () => {
    router.push('/signup')
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
