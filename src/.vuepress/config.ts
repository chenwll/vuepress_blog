import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "WL的技术笔记",
  description: "个人博客总结",
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
