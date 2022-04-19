import Vue from "vue";
import ImageMixins from "@/mixins/ImageMixins";

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__image_mixins__) {
    Vue.__image_mixins__ = true
    Vue.mixin(ImageMixins) // Set up your mixin then
}