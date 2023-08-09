<script setup>
import ChevronDown from "../assets/svgs/chevron-down.vue";
import DropDown from "@/components/drop-down-hover.vue";
import { getSrc, currentRouteName } from "../composables/util";
import { ref } from "vue";

/**REACTIVE STATES */
const sections = [
  {
    sectionTitle: "Jewellery",
    sectionItems: ["Shop all", "Bracelets", "Jewellery sets"],
  },
  {
    sectionTitle: "Men's",
    sectionItems: ["Shop all", "Bracelets", "Anklets", "Necklaces"],
  },
  {
    sectionTitle: "Shop the look",
    sectionItems: ["Demi-Fine", "Bridal gifts", "Shop all"],
  },
];

const mainNavItems = [
  "New Arrivals",
  "Shop",
  "custom",
  "subscription",
  "sale",
  "Brand",
];
/**COMPUTED PROPERTIES*/

/** FUNCTIONS */

/**HOOK */
</script>
<template>
  <div
    id="header"
    class="fixed top-0 left-0 right-0 z-20 bg-[#fff] font-brandon"
  >
    <div id="top-columns" class="min-w-[12px] bg-[#000]">
      <div id="top-column" class="py-[9px] flex justify-center">
        <p
          id="top-text"
          class="text-[9.6px] text-white tracking-[1.35px] leading-[1] uppercase"
        >
          FREE gift on orders Ksh7,649.38 KES+
        </p>
      </div>
    </div>
    <div id="columns" class="border-b border-[#eee]">
      <div
        id="column"
        class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto"
      >
        <div
          id="navigation"
          class="h-[64px] text-black flex items-center justify-between"
        >
          <div class="flex items-center">
            <router-link
              :to="{ name: 'Home' }"
              id="main-nav-brand"
              class="lg:p-0 pl-[15px]"
            >
              <div id="nav-brand-logo" class="cursor-pointer">
                <img src="../assets/svgs/brand-logo.svg" />
              </div>
            </router-link>
            <div id="main-nav-left" class="hidden lg:block">
              <div id="main-nav-menu" class="flex ml-6">
                <DropDown :key="index" v-for="(item, index) in mainNavItems">
                  <template #menuButton>
                    <router-link
                      :to="{ name: 'ProductIndex' }"
                      id="nav-{}"
                      class="cursor-pointer"
                    >
                      <div id="dropdown-trigger">
                        <a
                          id="nav-link"
                          class="tracking-[.15em] leading-[1rem] cursor-pointer py-8 lg:px-4 xl:px-6 text-[.75rem] transition hover:text-black/70 uppercase font-mediumm"
                        >
                          {{ item }}
                        </a>
                      </div>
                      <div id="nav-drop-{}"></div>
                    </router-link>
                  </template>
                  <template #menuData
                    ><div id="grid" class="flex flex-row justify-between">
                      <div id="col-left" class="flex flex-row">
                        <div
                          id="section"
                          v-for="(section, index) in sections"
                          class="flex-col p-[12px] mr-[48px] last:mr-0"
                        >
                          <div
                            id="drop-down-header"
                            class="mb-[20px] text-[12px] uppercase font-medium"
                          >
                            {{ section.sectionTitle }}
                          </div>
                          <div
                            v-for="(sectionItem, index) in section.sectionItems"
                            id="section-item"
                            class="mb-[0.5rem] text-[14px] font-light hover:underline hover:opacity-70 cursor-pointer"
                          >
                            {{ sectionItem }}
                          </div>
                        </div>
                      </div>
                      <div id="col-rigth">
                        <div class="py-[12px]">
                          <div
                            id="image-container"
                            class="w-[373px] h-[211px] cursor-pointer"
                          >
                            <img
                              class="object-contain w-full h-full"
                              :src="getSrc('images/bracelet3.jpg')"
                              alt=""
                            />
                          </div>
                          <div id="text">
                            <p
                              class="text-[12px] text-center font-light tracking[.025px] text-[#1a1919] leading-[1.2] hover:underline hover:opacity-70 cursor-pointer"
                            >
                              Layer in color and pattern with amazing string patterns
                            </p>
                          </div>
                        </div>
                      </div>
                    </div></template
                  >
                </DropDown>
              </div>
            </div>
          </div>

          <div id="main-nav-right">
            <div id="main-nav-menu" class="flex items-center">
              <a
                :key="index"
                v-for="(navItem, index) in [
                  'images/search.png',
                  'svgs/q-mark.svg',
                  'svgs/user.svg',
                ]"
                class="tracking-[1.25px] cursor-pointer first:pl-0 p-[0.75rem] text-[11px] font-[500] transition hover:text-black/70"
                ><img class="w-[20px] h-[20px]" :src="getSrc(navItem)" alt=""
              /></a>
              <a
                :key="index"
                v-for="(navItem, index) in ['images/heart.png']"
                class="lg:hidden tracking-[1.25px] cursor-pointer first:pl-0 p-[0.75rem] text-[11px] font-[500] transition hover:text-black/70"
                ><img class="w-[20px] h-[20px]" :src="getSrc(navItem)" alt=""
              /></a>
              <router-link
                :to="{ name: 'Cart' }"
                class="cart tracking-[1.25px] cursor-pointer first:pl-0 p-[0.75rem] text-[11px] font-[500] transition hover:text-black/70"
                ><img
                  class="w-[20px] h-[20px]"
                  :src="getSrc('images/shopping-bag.png')"
                  alt=""
              /></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #nav-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: black;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }

  #nav-link:hover::after {
    width: 100%;
  }
</style>
