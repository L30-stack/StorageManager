<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex-shrink-0 h-10 w-10">
        <img v-if="product.img" :src="product.img" alt="" class="h-10 w-10 rounded-full"/>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div>
        <div class="text-sm font-medium text-gray-900">
          {{ product.name }}
        </div>
        <div class="text-sm text-gray-500">
          {{ product.category }}
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
          class="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"> {{product.goodtill}} </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900 pl-5">{{ product.amount }}</div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class=" text-sm text-gray-500 ml-3">
        {{ product.weight }}g
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
      <a class="text-indigo-600 hover:text-indigo-900" style="cursor: pointer" @click="handleEdit(product.value)">Edit</a>
    </td>
  </tr>
</template>

<script>
import Modal from "@/components/ModalWrapper.vue";

export default {
  name: "Product",
  components: {
    Modal
  },

  props: {
    product: Object
  },
  mounted() {
    console.log(this.product)
  },
  methods:{
    handleEdit(el){
      this.$emit('edit', el)
    }
  }
}
</script>

<style scoped>

</style>