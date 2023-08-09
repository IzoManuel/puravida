<script setup>
import { getSrc, currentRouteName } from "@/composables/util";
import { computed, ref } from "vue";

const sections = ref([
  {
    title: "Shop",
    items: ["Bracelets", "Best sellers", "jewelery", "Charity", "sale"],
  },
  {
    title: "Brand",
    items: [
      "Our story",
      "our impact",
      "Earn rewards",
      "Brand ambassador",
      "refer-a-friend",
    ],
  },
  {
    title: "Help",
    items: [
      "Help & FAQ",
      "Track my order",
      "returns and exchange",
      "store locator",
      "afterpay",
    ],
  },
  {
    title: "More info",
    items: [
      "Privacy policy",
      "Terms of use",
      "Disclaimer",
      "Legal",
      "Media inquiries",
    ],
  },
]);
/**COMPUTED PROPERTIES */
const footerStyle = computed(() => {
  return {
    top: ["Register", "Login"].includes(currentRouteName()) ? "78vh" : "0",
  };
});
</script>

<template>
  <section id="footer" class="-" :style="footerStyle">
    <div id="footer-content" class="">
      <div id="newsletter" class="bg-[#ecfafa] py-10 lg:py-20 px-6 lg:px-10">
        <div
          id="grid"
          class="flex flex-col md:flex-row justify-center bg-[#ecfafa] 2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto"
        >
          <div id="col-left">
            <div id="newsletter-header">
              <p
                class="text-[17px] text-center md:text-left leading-[1.6] mb-[30px] md:text-[20px] md:pr-[25px] lg:text-[24px] lg:mr-[75px] p-0"
              >
                Want more Pura Vida? Get 20% OFF your first order when you sign
                up for email or SMS!
              </p>
            </div>
          </div>
          <div id="col-right" class="max-w-[480px] w-full">
            <div id="newsletter-form">
              <div id="input-group" class="flex flex-wrap gap-2 md:flex-nowrap">
                <input
                  placeholder="Email"
                  type="email"
                  class="w-full h-[50px] pl-[0.5rem] mb-[0.5rem]"
                />
                <button
                  class="w-full max-w-[150px] h-[50px] border border-black bg-black text-white uppercase text-[12px] tracking-[1.5px] px-[20px]"
                >
                  Sign me up!
                </button>
              </div>
              <div id="newsletter-consent" class="mt-[10px] flex items-center">
                <input type="checkbox" id="email-consent" class="mr-[8px]" />
                <label for="email-consent" class="text-[10px] leading-[1.4]"
                  >By submitting your email address you consent to marketing and
                  online advertising by Pura Vida</label
                >
              </div>
            </div>
            <div id="newsletter-sms-text" class="mt-[32px]">
              <h2 class="text-[17px] tracking-[.15em] uppercase">
                tEXT <strong>Puravida</strong> TO <strong>38817</strong> FOR 20%
                OFF!
              </h2>
            </div>
            <div id="newsletter-disclaimer" class="mt-[12px] mb-[10px]">
              <p class="text-[10px]">
                By signing up via text, you agree to receive recurring automated
                promotional and personalized marketing text messages (e.g. cart
                reminders) from Pura Vida at the cell number used when signing
                up. Consent is not a condition of any purchase. Reply HELP for
                help and STOP to cancel. Msg frequency varies. Msg & data rates
                may apply.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="!['Register', 'Login'].includes(currentRouteName())"
        id="site-footer"
        class="bg-black"
      >
        <div
          id="footer-container"
          class="2xl:max-w-[1344px] xl:max-w-[1152px] lg:max-w-[960px] mx-auto text-white pt-10 pb-28 lg:py-12"
        >
          <div
            id="columns footer-columns"
            class="flex flex-col justify-between lg:flex-row"
          >
            <div
              id="columns col-left"
              class="flex lg:w-[75%] justify-between border-r border-gray-500"
            >
              <div
                v-for="(section, index) in sections"
                id="column"
                class="p-[0.75rem] lg:pr-[65px] md:pr-[80px] uppercase"
              >
                <h1
                  id="footer-col-title"
                  class="text-[10px] leading-[1.38] tracking-[2px] mb-[20px] font-bold"
                >
                  {{ section.title }}
                </h1>
                <div
                  :key="index"
                  v-for="(sectionItem, index) in section.items"
                  id="footer-link"
                  class="text-[10px] tracking-[1.8px] mb-[14px]"
                >
                  <a class="cursor-pointer hover:underline">{{
                    sectionItem
                  }}</a>
                </div>
              </div>
            </div>
            <div
              id="column col-right"
              class="tracking-[1.8px] md:max-w-[410px] p-[0.75rem] lg:pl-20 pb-[30px] mb-[50px]"
            >
              <div id="socials">
                <div id="section-title" class="mb-3">
                  <h1 class="uppercase font-bold text-[10px]">
                    Follow our journey
                  </h1>
                </div>
                <div
                  id="icons"
                  class="text-[14px] tracking-[0.15px] mb-8 flex items-center"
                >
                  <img
                    :key="index"
                    v-for="(item, index) in [
                      'instagram.svg',
                      'facebook.svg',
                      'pinterest.svg',
                      'twitter.svg',
                    ]"
                    class="mr-5 h-[30px] w-[20px] cursor-pointer"
                    :src="getSrc(`svgs/${item}`)"
                  />
                </div>
              </div>
              <div id="certification-logo" class="mb-8 max-w-[50px]">
                <img :src="getSrc('svgs/certified.svg')"/>
              </div>
              <h1 class="uppercase font-bold text-[10px] mb-2">
                    Need to get intouch?
              </h1>
              <div><span class="text-[12px] cursor-pointer tracking-tight">info@puravidabracelets.com</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
