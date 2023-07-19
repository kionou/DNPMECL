<template>
    <nav class="mb-10 flex justify-center">
    <ol class="flex">
        <li
            class="relative w-[150px] text-center text-sm font-light italic
                after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5
                after:bg-indigo-500 after:rounded-full after:z-50"
        >
            Etape 1
        </li>
        <li
            class="relative w-[150px] text-center text-sm font-light italic
                before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1
                after:bg-gray-300 before:bg-gray-300
                after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:rounded-full after:z-50"
                :class="{
                    'stepFull':
                    currentStep >= 1 && currentStep <= 3
                }"
        >
            Etape 2
        </li>

        <li
            class="relative w-[150px] text-center text-sm font-light italic
                before:content-[''] before:absolute before:left-[-50%] before:top-[calc(200%+0.5rem)] before:w-full before:h-1
               after:bg-gray-300 before:bg-gray-300
                after:content-[''] after:absolute after:left-[50%] after:top-[200%] after:w-5 after:h-5 after:bg-gray-300 after:rounded-full after:z-50"
                :class="{
                    'stepFull':
                    currentStep >= 2 && currentStep <= 3
                }"
        >
            Etape 3
        </li>
    </ol>
   </nav>

<!-- components dynamiques -->
<component
    v-bind:is="formSteps[currentStep]"
    v-bind:formValues="values"
></component>
<div class="btngeneral">
    <div
    class="btnForm py-3 flex  items-center justify-between "
    v-if="currentStep < 3"
>
    <button
        type="submit"
        class="btnLogin"
        v-on:click="previousStep"
        v-if="currentStep > 0"
    >
        Précedent
    </button>

    <button
        type="submit"
        class="btnLogin"
        v-on:click="nextStep"
    >
        Suivant
    </button>
</div>
</div>

</template>

<script setup>
import FirstStepVue from '../../components/Public/TEST/FirstStep.vue';
import SecondStepVue from '../../components/Public/TEST/SecondStep.vue';
import ThirdStepVue from '../../components/Public/TEST/ThirdStep.vue';
import FinalStepVue from '../../components/Public/TEST/FinalStep.vue';
import useForm from '../../composable/form';

import { ref } from 'vue';

const {
    values
} = useForm();

const currentStep = ref(0);
const formSteps = [
    FirstStepVue,
    SecondStepVue,
    ThirdStepVue,
    FinalStepVue,
];

const nextStep = () => {
    currentStep.value++;
}

const previousStep = () => {
    currentStep.value--;
}
</script>
<style lang="css" scoped>
nav{
    margin-top: 30px;

}
.btngeneral{
    width: 100%;
    padding: 0 10px;

}
.btnForm {
 
  max-width: 1140px;
  margin: 20px auto;
  background-color: white;
  padding: 1rem;
  color: black;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);
}

.btnLogin {
  padding: 1em 3em;
  font-size: 12px;
  font-weight: 500;
  color: #000;
  background-color: #F9D310;
  border: none;
  border-radius: 45px;
 
  cursor: pointer;
  outline: none;
}

.btnLogin:hover {
  background-color: #fff;
  border: 1px solid #F9D310 ;
 
}
</style>