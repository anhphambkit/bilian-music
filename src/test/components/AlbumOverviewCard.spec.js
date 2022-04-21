import { createLocalVue, shallowMount } from '@vue/test-utils'
import AlbumOverviewCard from '@/components/AlbumOverviewCard'
import ImageMixins from "@/mixins/ImageMixins";

// install plugins as normal
import { BootstrapVueIcons, BootstrapVue } from 'bootstrap-vue';
function createConfig(overrides) {
    process.env.BOOTSTRAP_VUE_NO_WARN = true
    const albumItem = { 
        released: "2020-10-23T00:00:00.000Z",
        albumId: "alb.517280316",
        albumImage: "https://api.napster.com/imageserver/v2/albums/alb.517280316/images/200x200.jpg",
        albumName: "Year Zero",
        artistImage: "https://api.napster.com/imageserver/v2/artists/art.122743427/images/70x70.jpg",
        artistName: "Tchami",
        artistId: "art.122743427",
    }
    const localVue = createLocalVue()
    localVue.mixin(ImageMixins)
    localVue.use(BootstrapVue)
    localVue.use(BootstrapVueIcons)
    const mocks = {
        $router: {
          push: jest.fn()
        },
    }
    const propsData = albumItem
    return Object.assign({ mocks, propsData, localVue }, overrides)
}
  
describe('AlbumOverviewCard.vue', () => {
    test('TEST CASE 1: Render AlbumOverViewCard HTML', () => {
        const wrapper  = shallowMount(AlbumOverviewCard, createConfig())
        expect(wrapper).toMatchSnapshot()
    })

    test('TEST CASE 2: redirect to AlbumDetail page when clicking on image album', () => {
        const config = createConfig()
        const wrapper  = shallowMount(AlbumOverviewCard, config)
        wrapper.find('.album-overview-card__top').trigger('click')
        const spy = jest.spyOn(config.mocks.$router, 'push')
        expect(spy).toHaveBeenCalledWith(`/album/${config.propsData.albumId}`)
    })

    test('TEST CASE 3: redirect to AlbumDetail page when clicking on album name', () => {
        const config = createConfig()
        const wrapper  = shallowMount(AlbumOverviewCard, config)
        wrapper.find('.album-overview-card__info.name').trigger('click')
        const spy = jest.spyOn(config.mocks.$router, 'push')
        expect(spy).toHaveBeenCalledWith(`/album/${config.propsData.albumId}`)
    })
})