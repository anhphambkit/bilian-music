import { createLocalVue, shallowMount } from '@vue/test-utils'
import Player from '@/components/Player'
import ImageMixins from "@/mixins/ImageMixins";
import Vue from 'vue';
// install plugins as normal
import { BootstrapVueIcons, BootstrapVue } from 'bootstrap-vue';
function createConfig(overrides) {
    process.env.BOOTSTRAP_VUE_NO_WARN = true
    const playlists = [
        {
            "type": "track",
            "id": "tra.517280317",
            "index": 1,
            "disc": 1,
            "href": "https://api.napster.com/v2.2/tracks/tra.517280317",
            "playbackSeconds": 172,
            "isExplicit": true,
            "isStreamable": true,
            "isAvailableInHiRes": false,
            "name": "Heartless",
            "isrc": "QMUY42000126",
            "shortcut": "tchami/year-zero/heartless",
            "blurbs": [],
            "artistId": "art.122743427",
            "artistName": "Tchami",
            "albumName": "Year Zero",
            "formats": [
                {
                    "type": "format",
                    "bitrate": 64,
                    "name": "AAC PLUS",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 192,
                    "name": "AAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 320,
                    "name": "AAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 128,
                    "name": "MP3",
                    "sampleBits": 16,
                    "sampleRate": 44100
                }
            ],
            "losslessFormats": [
                {
                    "type": "format",
                    "bitrate": 44100,
                    "name": "FLAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                }
            ],
            "albumId": "alb.517280316",
            "isAvailableInAtmos": false,
            "contributors": {
                "primaryArtist": "art.122743427",
                "composer": "art.230600406",
                "featuredPerformer": "art.230600406",
                "producer": "art.230600406"
            },
            "links": {
                "artists": {
                    "ids": [
                        "art.122743427"
                    ],
                    "href": "https://api.napster.com/v2.2/artists/art.122743427"
                },
                "albums": {
                    "ids": [
                        "alb.517280316"
                    ],
                    "href": "https://api.napster.com/v2.2/albums/alb.517280316"
                },
                "composers": {
                    "ids": [
                        "art.230600406"
                    ],
                    "href": "https://api.napster.com/v2.2/artists/art.230600406"
                },
                "genres": {
                    "ids": [
                        "g.71",
                        "g.290",
                        "g.367"
                    ],
                    "href": "https://api.napster.com/v2.2/genres/g.71,g.290,g.367"
                },
                "tags": {
                    "ids": [
                        "tag.152196543",
                        "tag.152196496"
                    ],
                    "href": "https://api.napster.com/v2.2/tags/tag.152196543,tag.152196496"
                }
            },
            "previewURL": "https://listen.hs.llnwd.net/g3/prvw/0/5/3/1/2/2236721350.mp3"
        },
        {
            "type": "track",
            "id": "tra.649043863",
            "index": 2,
            "disc": 1,
            "href": "https://api.napster.com/v2.2/tracks/tra.649043863",
            "playbackSeconds": 198,
            "isExplicit": true,
            "isStreamable": true,
            "isAvailableInHiRes": false,
            "name": "Be Somebody",
            "isrc": "USUS11800257",
            "shortcut": "various-artists/ultra-music-festival-2022/be-somebody",
            "blurbs": [],
            "artistId": "art.18063207",
            "artistName": "Steve Aoki",
            "albumName": "Ultra Music Festival 2022",
            "formats": [
                {
                    "type": "format",
                    "bitrate": 128,
                    "name": "MP3",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 64,
                    "name": "AAC PLUS",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 192,
                    "name": "AAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 320,
                    "name": "AAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                }
            ],
            "losslessFormats": [
                {
                    "type": "format",
                    "bitrate": 44100,
                    "name": "FLAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                }
            ],
            "albumId": "alb.649043844",
            "isAvailableInAtmos": false,
            "contributors": {
                "composer": "art.7505418",
                "featuredPerformer": "art.18063207",
                "producer": "art.18063207",
                "primaryArtist": "art.18063207",
                "engineer": "art.29818873",
                "guestVocals": "art.203767986"
            },
            "links": {
                "artists": {
                    "ids": [
                        "art.18063207"
                    ],
                    "href": "https://api.napster.com/v2.2/artists/art.18063207"
                },
                "albums": {
                    "ids": [
                        "alb.649043844"
                    ],
                    "href": "https://api.napster.com/v2.2/albums/alb.649043844"
                },
                "composers": {
                    "ids": [
                        "art.7505418"
                    ],
                    "href": "https://api.napster.com/v2.2/artists/art.7505418"
                },
                "genres": {
                    "ids": [
                        "g.71"
                    ],
                    "href": "https://api.napster.com/v2.2/genres/g.71"
                },
                "tags": {
                    "ids": [
                        "tag.152196543"
                    ],
                    "href": "https://api.napster.com/v2.2/tags/tag.152196543"
                }
            },
            "previewURL": "https://listen.hs.llnwd.net/g3/prvw/0/4/8/0/0/2540000840.mp3"
        },
        {
            "type": "track",
            "id": "tra.649044217",
            "index": 5,
            "disc": 1,
            "href": "https://api.napster.com/v2.2/tracks/tra.649044217",
            "playbackSeconds": 156,
            "isExplicit": true,
            "isStreamable": true,
            "isAvailableInHiRes": false,
            "name": "CHAOS",
            "isrc": "USUS12100330",
            "shortcut": "various-artists/ultra-music-festival-2022/chaos",
            "blurbs": [],
            "artistId": "art.67692370",
            "artistName": "Say My Name",
            "albumName": "Ultra Music Festival 2022",
            "formats": [
                {
                    "type": "format",
                    "bitrate": 128,
                    "name": "MP3",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 320,
                    "name": "AAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 192,
                    "name": "AAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                },
                {
                    "type": "format",
                    "bitrate": 64,
                    "name": "AAC PLUS",
                    "sampleBits": 16,
                    "sampleRate": 44100
                }
            ],
            "losslessFormats": [
                {
                    "type": "format",
                    "bitrate": 44100,
                    "name": "FLAC",
                    "sampleBits": 16,
                    "sampleRate": 44100
                }
            ],
            "albumId": "alb.649043844",
            "isAvailableInAtmos": false,
            "contributors": {
                "featuredPerformer": "art.67692370",
                "primaryArtist": "art.67692370",
                "composer": "art.265128670"
            },
            "links": {
                "artists": {
                    "ids": [
                        "art.67692370"
                    ],
                    "href": "https://api.napster.com/v2.2/artists/art.67692370"
                },
                "albums": {
                    "ids": [
                        "alb.649043844"
                    ],
                    "href": "https://api.napster.com/v2.2/albums/alb.649043844"
                },
                "composers": {
                    "ids": [
                        "art.265128670"
                    ],
                    "href": "https://api.napster.com/v2.2/artists/art.265128670"
                },
                "genres": {
                    "ids": [
                        "g.71"
                    ],
                    "href": "https://api.napster.com/v2.2/genres/g.71"
                },
                "tags": {
                    "ids": [
                        "tag.152196543"
                    ],
                    "href": "https://api.napster.com/v2.2/tags/tag.152196543"
                }
            },
            "previewURL": "https://listen.hs.llnwd.net/g3/prvw/9/4/8/9/9/2539999849.mp3"
        }
    ]
    const localVue = createLocalVue()
    localVue.mixin(ImageMixins)
    localVue.use(BootstrapVue)
    localVue.use(BootstrapVueIcons)
    const mocks = {
        $router: {
          push: jest.fn()
        },
    }
    const propsData = {
        playlists
    }
    return Object.assign({ mocks, propsData, localVue }, overrides)
}
  
describe('Player.vue', () => {
    test('TEST CASE 1: Render Player HTML', () => {
        const wrapper  = shallowMount(Player, createConfig())
        expect(wrapper).toMatchSnapshot()
    })

    test('TEST CASE 2: redirect to ArtistDetail page when clicking on author name and author is available(it\'s not various artists)', () => {
        const config = createConfig()
        const wrapper  = shallowMount(Player, config)
        wrapper.find('.player__info.artist').trigger('click')
        const spy = jest.spyOn(config.mocks.$router, 'push')
        expect(spy).toHaveBeenCalledWith(`/artist/${config.propsData.playlists[0].artistId}`)
    })

    test('TEST CASE 3: show the tracks list when clicking on List button and tracks list is hidden', () => {
        const config = createConfig()
        const wrapper  = shallowMount(Player, config)
        wrapper.find('.player__action.list').trigger('click')
        expect(wrapper.find('.player__list-wrapper').isVisible()).toBe(false)
    })

    test('TEST CASE 4: show the tracks list when clicking on List button and tracks list is show', async () => {
        const config = createConfig()
        const wrapper = shallowMount(Player, config)
        await wrapper.setData({ showPlaylist: true })
        wrapper.find('.player__action.list').trigger('click')
        expect(wrapper.find('.player__list-wrapper').isVisible()).toBe(true)
    })

    test('TEST CASE 5: play previous track when clicking on Previous button', async () => {
        const config = createConfig()
        const wrapper = shallowMount(Player, config)
        await wrapper.setData({ playingIndex: 1 })
        wrapper.find('.player__action.previous').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.player__info.name').text()).toContain(config.propsData.playlists[0].name)
    })

    test('TEST CASE 6: play next track when clicking on Next button', async () => {
        const config = createConfig()
        const wrapper = shallowMount(Player, config)
        await wrapper.setData({ playingIndex: 0 })
        wrapper.find('.player__action.next').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.player__info.name').text()).toContain(config.propsData.playlists[1].name)
    })

    test('TEST CASE 7: play any track when selecting the track in list', async () => {
        const config = createConfig()
        const wrapper = shallowMount(Player, config)
        await wrapper.setData({ playingIndex: 0 })
        wrapper.find('.player__track.track-1').trigger('click')
        await Vue.nextTick()
        expect(wrapper.find('.player__info.name').text()).toContain(config.propsData.playlists[1].name)
    })
})