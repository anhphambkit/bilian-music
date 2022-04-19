import Vue from "vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import {
	BContainer,
	BImg,
	BImgLazy,
	BRow,
	BCol,
	BBadge,
	TooltipPlugin,
	BIconMusicNoteList,
	BIconSkipStartFill,
	BIconSkipEndFill,
	BIconDiscFill,
	BSkeletonWrapper,
	BSkeleton,
	BSkeletonImg,
	BOverlay
} from "bootstrap-vue";

Vue.component("b-container", BContainer);
Vue.component("b-img", BImg);
Vue.component("b-img-lazy", BImgLazy);
Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
Vue.component("b-badge", BBadge);
Vue.component("b-icon-music-note-list", BIconMusicNoteList);
Vue.component("b-icon-skip-start-fill", BIconSkipStartFill);
Vue.component("b-icon-skip-end-fill", BIconSkipEndFill);
Vue.component("b-icon-disc-fill", BIconDiscFill);
Vue.component("b-skeleton-wrapper", BSkeletonWrapper);
Vue.component("b-skeleton", BSkeleton);
Vue.component("b-skeleton-img", BSkeletonImg);
Vue.component("b-overlay", BOverlay);
Vue.use(TooltipPlugin);