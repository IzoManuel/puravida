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
  console.log("Attempt toggle");
  store.dispatch("toggleSlideover");
}
</script>
<template>
  <div id="column" class="">
    <div
      v-if="hasItems"
      id="product-grid"
      class="grid lg:grid-cols-4 grid-cols-2 last:-mb-[0.75rem] gap-4"
    >
      <div
        id="column"
        class="group"
        :key="index"
        v-for="(item, index) in limitedItems"
      >
        <router-link :to="{ name: 'ViewProduct', params: { id: item.slug } }">
          <div id="product-card" class="">
            <a id="product-image" class="cursor-pointer relative">
              <div
                id="product-image-container"
                class="relative lg:max-w-[400px] m-auto"
              >
                <div
                  id="badge"
                  class="rounded-[50px] text-center w-[40px] h-[40px] flex items-center justify-between absolute left-[15px] z-10 border border-black"
                >
                  <p
                    id="badge-text"
                    class="text-[10px] leading-[1.2] tracking-[1px] uppercase w-full"
                  >
                    New
                  </p>
                </div>
                <div>
                  <div
                    id="nacelle-image"
                    class="max-h-[190px]  md:max-h-[400px] mx-auto"
                  >
                    <img
                      :src="getSrc(`images/${item.thumbnail_img}.jpg`)"
                      class="max-h-[190px] md:max-h-[400px] mx-auto object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </a>
            <div
              id="product-card-details"
              class="flex flex-col pt-[10px] w-full "
            >
              <a class="cursor-pointer">
                <h3
                  id="product-title"
                  class="uppercase text-[10px] leading-[1.3] tracking-[1px] text-center mb-[0.5rem] hover:text-black/80 font-medium group-hover:underline"
                >
                  {{ item.name }}
                </h3>
              </a>
              <div
                id="product-price-range"
                class="text-center flex items-center gap-1 mx-auto"
              >
                <span
                  id="product-price"
                  class="text-center hover:underline text-[12px] leading-[1.83] tracking-[0.5px] mb-[0.5px] font-medium"
                  >${{ item.unit_price }}</span
                >
              </div>
            </div>
          </div>
        </router-link>
        <div
          id="add-to-cart"
          class="flex items-center transition lg:opacity-0 group-hover:opacity-100 mt-[15px] duration-300"
        >
          <GButton
            :label="'Add to cart'"
            class="mx-auto bg-[#34c1bb] text-white w-full font-bold"
            @click="handleCartButtonClick(item)"
          ></GButton>
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
