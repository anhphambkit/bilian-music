import DEFAULT_THUMB from "@/assets/media/default.jpg";
export default {
    name: 'ImageMixins',
    mixins: [],
    props: {},
    data() {
      return {}
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        $_imageMixins_loadImageSrc(src, altImage = DEFAULT_THUMB) {
            return src ? src : altImage;
        },
        $_imageMixins_loadImageError(event) {
            let img = event.srcElement;
            img.src = DEFAULT_THUMB;
            event.target.src = DEFAULT_THUMB;
            img.onerror = null; 
        }
    },
}