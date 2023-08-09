<script setup>
import { getSrc } from "../composables/util";
import { computed, nextTick } from "vue";
import Spinner from "../components/Spinner.vue";
import GButton from "./g-button.vue";
import store from "@/store";
import CartSlideover from "@/pages/cart/partials/cart-slideover.vue";

const props = defineProps({
  items: {
    type: Array,
  },
  limit: {
    type: Number,
    default: 0,
  },
  list: Boolean,
  loader: Boolean,
});

const hasItems = computed(() => {
  return props.items && props.items.length;
});

const limitedItems = computed(() => {
  if (props.limit === 0) {
    return props.items;
  } else {
    return props.items.slice(0, props.limit);
  }
});

const addItemToCart = (item) => {
  nextTick(() => {
    store.dispatch("addCartItem", item);
  });
};

function handleCartButtonClick(item) {
  addItemToCart({ cartItem: item });
  store.dispatch("toggleSlideover");
}
</script>
<template>
  <div id="column" class="">
    <div
      v-if="hasItems"
      id="product-grid"
      class="grid lg:grid-cols-4 grid-cols-2 last:-mb-[0.75rem] gap-4 lg:gap-10"
    >
      <div
        id="column"
        class=""
        :key="index"
        v-for="(item, index) in limitedItems"
      >
        <router-link :to="{ name: 'ProductIndex' }">
          <div id="product-card" class="">
            <a id="product-image" class="cursor-pointer relative">
              <div id="product-image-container" class="lg:max-w-[400px] m-auto">
                <div>
                  <div
                    id="nacelle-image"
                    class="md:max-w-[400px] md:max-h-[400px] mx-auto w-full h-full"
                  >
                    <img :src="getSrc(`images/${item.thumbnail_img}`)" alt="" class="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            </a>
            <div
              id="product-card-details"
              class="flex flex-col pt-[24px] justify-between w-full min-h-[80px] md:pr-6"
            >
              <a class="cursor-pointer">
                <h3
                  id="product-title"
                  class="text-[1.875rem] leading-[2.25rem] tracking-[0.5px] hover:text-black/80 uppercase"
                >
                  {{ item.name }}
                </h3>
              </a>
              <div
                id="product-description"
                class="flex items-center gap-1 my-[0.75rem]"
              >
                <span
                  id="product-description"
                  class="text-[12px] leading-[1.83] tracking-[0.5px] mb-[0.5px]"
                  >{{ item.description }}</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <div id="category" class="flex">
          <router-link
            :to="{ name: 'ProductIndex' }"
            class="uppercase underline tracking-[.1em] text-[.75rem] leading-[1rem] font-bold hover:text-teal-500"
          >{{ item.cta }}</router-link>
        </div>
      </div>
    </div>
    <div class="h-[10vh] w-full flex items-center" v-else>
      <div v-if="loader" id="spinner" class="w-[30px] h-[30px] mx-auto">
        <spinner class="fill-gray-500"></spinner>
      </div>
      <p v-else class="mx-auto">Oops! no Data</p>
    </div>
    <CartSlideover />
  </div>
</template>
