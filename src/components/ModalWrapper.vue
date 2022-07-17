<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
          <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
          >
            <div
                class="inline-block w-full p-6 my-8 max-w-2xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <slot>
                <CreateProduct :product="this.open" @toggle="this.$emit('toggle', false)"></CreateProduct>
              </slot> <!-- slot for forms -->
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {ref} from 'vue'
import {Dialog, TransitionChild, TransitionRoot,} from '@headlessui/vue'
import CreateProduct from "@/components/CreateProduct.vue";

export default {
  components: {
    Dialog, CreateProduct, TransitionChild, TransitionRoot
  }, data() {
    return {
      isOpen: ref(true)
    }
  },
  props: {
    open: Object
  }, methods: {
    closeModal: (el) => {
      this.isOpen.value = false
    }
  },


}


</script>