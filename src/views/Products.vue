<template>
  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-900">Meine Produkte</h1>
    </div>
  </header>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="px-4 py-6 sm:px-0">
        <div class="pt-2 relative text-gray-600 flex" style="justify-content: right">
          <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                 name="search" placeholder="Search" type="search">
          <button class="absolute right-0 top-0 mt-5 mr-4" type="submit">
            <svg id="Capa_1" class="text-gray-600 h-4 w-4 fill-current"
                 height="512px" style="enable-background:new 0 0 56.966 56.966;" version="1.1"
                 viewBox="0 0 56.966 56.966" width="512px"
                 x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                 y="0px">
            <path
                d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
          </svg>
          </button>
        </div>
        <div class="flex flex-col">
          <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">Produkt
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">Status
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">Anzahl
                    </th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        scope="col">Gewicht
                    </th>
                    <th class="relative px-6 py-3" scope="col">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                    <Product v-for="product in products" :product="product" :key="product.id" @edit="openModal"/>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal v-if="openEdit" :open="editProduct" @toggle="openEdit = false"></Modal>
  </main>
</template>

<script setup>
import api from '@/services/api'
import Product from "@/components/Product.vue";
import Modal from "@/components/ModalWrapper.vue";
import {onMounted, ref} from "vue";

const products =  ref([]);
const openEdit = ref(false)
const editProduct =  Object

  onMounted(() => {
    api.get('/products')
        .then(res => {
          products.value = res.data
        })
  })
const openModal = (el) => {
      editProduct.value = el
      openEdit.value = true
    }
</script>