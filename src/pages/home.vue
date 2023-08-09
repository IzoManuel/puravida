<script setup>
import BaseLayout from "../layouts/base-layout.vue";
import CtaSection from "../layouts/cta-section.vue";
import ChevronDown from "../assets/svgs/chevron-down.vue";
import GButton from "@/components/g-button.vue";
import ProductsGrid from "@/components/products-grid.vue";
import CategoriesGrid from "@/components/categories-grid.vue";
import { computed, onMounted, ref } from "vue";
import store from "@/store";
import { getSrc } from "@/composables/util";

const categories = ref([
  {
    thumbnail_img: "cat-hand.jpg",
    name: "Vacataion vibes stretch Bracelet set",
    description:
      "Our best-selling stretch bracelet set has restocked AND now in two new colors.",
    cta: "Shop Stretch Bracelets",
  },
  {
    thumbnail_img: "cat-ring.jpg",
    name: "Demi-fine collection",
    description: "Elevated staple pieces for wherever your summer takes you.",
    cta: "Shop demi-fine",
  },
  {
    thumbnail_img: "cat-hands.jpg",
    name: "Friendship packs",
    description:
      "Save up to 34% on our friendship packs. Wear them all together, mix and match your favorite combinations or share with a friend!",
    cta: "Shop packs",
  },
  {
    thumbnail_img: "cat-shoe.jpg",
    name: "Vacataion vibes stretch Bracelet set",
    description:
      "Shop our nature-inspired collection that peaks for itself. For each style sold from our collab, 5% of the purchase will be donated to NPCA. ",
    cta: "Shop now",
  },
]);

const givingCauses = ref([
  {
    imgSrc: "cause1.svg",
    title: "Support artisans worldwide",
    description:
      "We work with artisans to create handcrafted products while providing sustainable and fair employment.",
  },
  {
    imgSrc: "cause2.svg",
    title: "eco-friendly packaging",
    description:
      "We ship all of our products in eco-friendly recyclable packaging and offer the option for plastic free shipping.",
  },
  {
    imgSrc: "cause3.svg",
    title: "$4+ million donated to charity",
    description:
      "We've partnered with 200+ charities across the globe and have helped support great causes along the way.",
  },
]);
/**
 * COMPUTED
 */
const products = computed(() => store.getters.productItems);
const loading = computed(() => store.getters.loading);

/**
 * FUNCTIONS
 */
function prepareComponent() {
  store.dispatch("getProductItems");
}

/**
 * HOOKS
 */
onMounted(() => {
  prepareComponent();
});
</script>

<template>
  <base-layout>
    <template #mainContent>
      <section id="hero" class="relative">
        <div id="hero-content" class="relative pb-[64px]">
          <div id="hero-image" class="w-full relative overflow-hidden">
            <img
              src="../assets/images/two-girls.jpg"
              class="w-full min-w-[820px] h-full"
            />
          </div>
          <div
            id="hero-body"
            class="min-h-[300px] absolute right-0 left-0 my-auto top-[50%] -translate-y-[50%] 2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto"
          >
            <div id="hero-container" class="relative mt-[35px] mb-[35px]">
              <div id="hero-body-inner" class="">
                <h3
                  id="hero-top-text"
                  class="text-[1.25rempx] leading-[1.75rem] tracking-[.15em] font-bold uppercase"
                >
                  Our best Selling
                </h3>
                <h3
                  id="hero-title"
                  class="text-[3.75rem] leading-[1.14] tracking-[3px] mb-[2.5rem] font-brandon"
                >
                  String Bracelets
                </h3>
                <h3
                  id="hero-subtitle"
                  class="-mt-[1.25rem] text-[14px] leading-[1.57] tracking-[0.5px] mb-[1rem]"
                >
                  Shop the bracelet that started it all
                </h3>
                <div class="mt-[48px]">
                  <router-link
                    :to="{ name: 'ProductIndex' }"
                    class="transition bg-white py-[17px] px-[40px] border border-[#fff] hover:text-[#fff] hover:bg-[#000] text-[12px] leading-[1] tracking-[1.5px] uppercase text-[#000]"
                    >shop now</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="categories-grid">
        <div id="product-grid-content" class="px-[1.5rem] mb-16 lg:mb-24">
          <div
            id="container"
            class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto"
          >
            <CategoriesGrid
              :items="categories"
              :loader="loading"
              :limit="4"
            ></CategoriesGrid>
          </div>
        </div>
      </section>
      <section id="products-grid">
        <div id="product-grid-content" class="px-[1.5rem] mb-16 xl:mb-24">
          <div
            id="container"
            class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto"
          >
            <div
              id="products-grid-header"
              class="flex items-center justify-between mb-4 md:mb-6"
            >
              <h3
                class="text-[1.5rem] leading-[2rem] uppercase tracking-[.1em]"
              >
                Trending Now
              </h3>
              <router-link
                :to="{ name: 'ProductIndex' }"
                class="hidden md:block"
              >
                <GButton
                  :label="'Shop all the new Arrivals'"
                  class="border border-black"
                ></GButton>
              </router-link>
            </div>
            <ProductsGrid
              :items="products"
              :loader="loading"
              :limit="4"
            ></ProductsGrid>
          </div>
        </div>
      </section>
      <section id="puravida-club">
        <div
          id="poravida-club-content"
          class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto"
        >
          <div
            id="columns"
            class="flex flex-col-reverse md:flex-row-reverse gap-10 mb-16 lg:mb-24"
          >
            <div id="column-left" class="md:w-1/2">
              <div
                id="text-image-column"
                class="flex flex-col-reverse h-full gap-6"
              >
                <div>
                  <h3
                    id="title"
                    class="text-[1.87rem] leading-[2.25rem] tracking-[.1em] mb-[0.75rem] uppercase"
                  >
                    Pura Vida Jewelry Club
                  </h3>
                  <div>
                    <p
                      id="text"
                      class="max-w-[450px] font-normal leading-[1.48] tracking-[0.5px] mb-4"
                    >
                      With the Pura Vida Jewelry Club you’ll receive an
                      exclusive 2 piece jewelry set that no one else can get
                      their hands on!
                    </p>
                    <button
                      id="cta"
                      class="transition border-b border-[#000] hover:border-[#000]/70 hover:text-[#000]/70 text-[.75rem] leading-[0.6rem] tracking-[.1em] font-bold uppercase"
                    >
                      learn more
                    </button>
                  </div>
                </div>
                <div id="image-container">
                  <img :src="getSrc('images/jewel-club.jpg')" loading="lazy" />
                </div>
              </div>
            </div>
            <div id="column-right" class="bg-[#fff] text-[#000] md:w-1/2">
              <div
                id="text-image-column"
                class="flex h-full gap-6 flex-col-reverse md:flex-col"
              >
                <div>
                  <h3
                    id="title"
                    class="text-[1.87rem] leading-[2.25rem] tracking-[.1em] mb-[0.75rem] uppercase"
                  >
                    Pura Vida Bracelet Club
                  </h3>
                  <div>
                    <p
                      id="text"
                      class="max-w-[450px] font-normal leading-[1.48] tracking-[0.5px] mb-4"
                    >
                      Customize your space with bold and beautiful wallpaper,
                      fabric and our new made to order french pleat curtains!
                    </p>
                    <button
                      id="cta"
                      class="transition border-b border-[#000] hover:border-[#000]/70 hover:text-[#000]/70 text-[.75rem] leading-[0.6rem] tracking-[.1em] font-bold uppercase"
                    >
                      learn more
                    </button>
                  </div>
                </div>
                <div id="image-container">
                  <img
                    :src="getSrc('images/bracelet-club.jpg')"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="custom-bracelets">
        <cta-section :col-bg="'bg-[#e2f6f5]'">
          <template #image>
            <img
              :src="getSrc('images/custom-bracelet.gif')"
              alt=""
              class="ml-auto w-full h-full"
              loading="lazy"
            />
          </template>
          <template #title>Custom bracelets</template>
          <template #description>
            Choose from hundreds of combinations to create the perfect party
            favors, fundraising styles and more.
          </template>
        </cta-section>
      </section>
      <section id="explore">
        <div id="explore" class="pt-[40px] max-w-[1120px] mx-auto md:py-[60px]">
          <div id="columns" class="flex flex-col-reverse md:flex-row-reverse">
            <div id="column-left" class="md:w-1/2">
              <img :src="getSrc('images/explore.jpg')" alt="" />
            </div>
            <div
              id="column-right"
              class="p-[80px] bg-[#fff] text-[#000] md:w-1/2"
            >
              <div id="text" class="flex flex-col h-full">
                <div>
                  <h3
                    id="top-text"
                    class="text-[.75rem] leading-[1rem] mb-2 tracking-[.15px] uppercase"
                  >
                    Time to explore
                  </h3>
                  <h3
                    id="title"
                    class="text-[1.875rem] leading-[2.25rem] mb-2 tracking-[.1em] uppercase"
                  >
                    Pura Vida's Live Free Tour
                  </h3>
                </div>
                <div>
                  <p id="text" class="max-w-[450px] mb-[2rem]">
                    We’re hitting the road this summer, making stops all over
                    the US for our very first Pura Vida tour! Follow along for
                    the ultimate summer adventure as we cross off bucket-list
                    items all around the country.
                  </p>
                  <button
                    id="cta"
                    class="transition border-b border-[#000] hover:border-[#000]/70 hover:text-[#000]/70 text-[14px] leading-[0.8] tracking-[0.5px] uppercase"
                  >
                    Follow along
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="giving-back">
        <div
          id="giving-back-content"
          class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto py-[75px] mb-16"
        >
          <div id="title" class="flex mb-[40px]">
            <span
              class="mx-auto relative text-center mb-[40px] leading-[1.4] text-[20px] tracking-[.25em] uppercase before:absolute before:bottom-[10%] before:h-[12px] before:w-full before:-z-10 before:bg-[#e1f7f6]"
              >How we give back</span
            >
          </div>
          <div id="giving-back-causes" class="flex justify-around">
            <div
              v-for="(cause, index) in givingCauses"
              id="giving-back-cause"
              class="flex flex-col items-center"
            >
              <div id="image" class="w-[50px] h-[50px] mb-[15px]">
                <img
                  :src="getSrc(`svgs/${cause.imgSrc}`)"
                  loading="lazy"
                  class="w-full h-full"
                />
              </div>
              <h3
                class="font-medium text-center uppercase tracking-[.15em] text-[13px]"
              >
                {{ cause.title }}
              </h3>
              <p
                class="text-center px-[10px] max-w-[320px] mt-[1rem] text-[14px]"
              >
                {{ cause.description }}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" class="bg-[#e2f6f5]">
        <div
          id="testimonials-content"
          class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto py-14 lg:py-20 mb-14"
        >
          <div id="section-title">
            <h3
              class="text-[20px] font-medium tracking-[.25em] text-center uppercase"
            >
              Featured in
            </h3>
          </div>
          <div
            id="testimonials"
            class="mt-9 grid grid-cols-3 lg:grid-cols-6 items-center"
          >
            <div
              v-for="(item, index) in [
                'test1.svg',
                'test2.svg',
                'test3.svg',
                'test4.svg',
                'test5.svg',
                'test6.svg',
              ]"
              id="testimonial"
              class="max-w-[100px] mx-auto h-auto"
            >
              <img
                :src="getSrc(`svgs/${item}`)"
                class="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <div
            id="rating"
            class="mt-9 lg:mt-12 flex flex-col items-center justify-center"
          >
            <h3 class="uppercase text-xs">Over 495,961 5-star customer reviews</h3>
            <div class="flex mt-4">
              <img
                loading="lazy"
                v-for="(star, index) in new Array(5)"
                :src="getSrc(`svgs/star.svg`)"
                class="mx-[4px]"
              />
            </div>
          </div>
        </div>
      </section>
      <!-- <section id="inspiration">
        <div
          id="inspiration-content"
          class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto py-[75px] mb-16"
        >
          <div id="title" class="flex mb-[40px]">
            <span
              class="mx-auto relative text-center mb-[40px] leading-[1.4] text-[20px] tracking-[.25em] uppercase before:absolute before:bottom-[10%] before:h-[12px] before:w-full before:-z-10 before:bg-[#e1f7f6]"
              >Get inspired</span
            >
          </div>
          <div id="giving-back-causes" class="flex justify-around">
            <div
              v-for="(cause, index) in givingCauses"
              id="giving-back-cause"
              class="flex flex-col items-center"
            >
              <div id="image" class="w-[50px] h-[50px] mb-[15px]">
                <img
                  :src="getSrc(`svgs/${cause.imgSrc}`)"
                  loading="lazy"
                  class="w-full h-full"
                />
              </div>
              <h3
                class="font-medium text-center uppercase tracking-[.15em] text-[13px]"
              >
                {{ cause.title }}
              </h3>
              <p
                class="text-center px-[10px] max-w-[320px] mt-[1rem] text-[14px]"
              >
                {{ cause.description }}
              </p>
            </div>
          </div>
        </div>
      </section> -->
    </template>
  </base-layout>
</template>

<style scoped></style>
