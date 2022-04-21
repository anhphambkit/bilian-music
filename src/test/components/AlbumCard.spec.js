import { createLocalVue, shallowMount } from '@vue/test-utils'
import AlbumCard from '@/components/AlbumCard'
import ImageMixins from "@/mixins/ImageMixins";

// install plugins as normal
import BootstrapVue from "bootstrap-vue";
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
        discCount: 2,
    }
    const localVue = createLocalVue()
    localVue.mixin(ImageMixins)
    localVue.use(BootstrapVue)
    const mocks = {
        $router: {
          push: jest.fn()
        },
    }
    const propsData = albumItem
    return Object.assign({ mocks, propsData, localVue }, overrides)
}
  
describe('AlbumCard.vue', () => {
    test('TEST CASE 1: Render AlbumCard HTML', () => {
        const wrapper  = shallowMount(AlbumCard, createConfig())
        expect(wrapper).toMatchSnapshot()
    })

    test('TEST CASE 2: redirect to AlbumDetail page when clicking on image album', () => {
        const config = createConfig()
        const wrapper  = shallowMount(AlbumCard, config)
        wrapper.find('.album__image-wrapper').trigger('click')
        const spy = jest.spyOn(config.mocks.$router, 'push')
        expect(spy).toHaveBeenCalledWith(`/album/${config.propsData.albumId}`)
    })

    test('TEST CASE 3: redirect to AlbumDetail page when clicking on album name', () => {
        const config = createConfig()
        const wrapper  = shallowMount(AlbumCard, config)
        wrapper.find('.album__name').trigger('click')
        const spy = jest.spyOn(config.mocks.$router, 'push')
        expect(spy).toHaveBeenCalledWith(`/album/${config.propsData.albumId}`)
    })

    test('TEST CASE 4: redirect to ArtistDetail page when clicking on author name and author is available(it\'s not various artists)', () => {
        const config = createConfig()
        const wrapper  = shallowMount(AlbumCard, config)
        wrapper.find('.album-card__info--value.author-detail').trigger('click')
        const spy = jest.spyOn(config.mocks.$router, 'push')
        expect(spy).toHaveBeenCalledWith(`/artist/${config.propsData.artistId}`)
    })
})