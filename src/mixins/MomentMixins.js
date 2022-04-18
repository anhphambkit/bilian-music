import moment from 'moment-timezone'
import { SYSTEM_MESSAGES } from '../messages/System'
import { DATE_TIME_CONFIGS } from '../configs/Settings'
export default {
	name: 'MomentMixins',
	mixins: [],
	data() {
		return {};
	},
	methods: {
		/**
		 *
		 * @param {*} timeString
		 * @param {*} formatTime
		 * @param {*} timezone
		 * @param {*} locale
		 */
		 $_momentMixins_formatDate(
			timeString,
			formatTime = DATE_TIME_CONFIGS.FORMAT,
			timezone = DATE_TIME_CONFIGS.TIMEZONE,
			locale = DATE_TIME_CONFIGS.LOCALE
		) {
			if (!timeString) {
				return SYSTEM_MESSAGES.INVALID_DATE
			}

			// Format locale
			if (locale) {
				require(`moment/locale/${locale}`)
				moment.locale(locale)
			}

			if (
				moment(timeString, 'DD/MM/YYYYTHH:mm:ss.SSSZ', true).isValid()
			) {
				const timeArray = timeString.split('T')
				if (timeArray.length === 2) {
					timeString = timeArray[0]
						.split('/')
						.reverse()
						.join('-')
						.concat('T', timeArray[1])
				}
			}

			if (timezone) {
				return moment
					.utc(timeString)
					.tz(DATE_TIME_CONFIGS.timezone)
					.format(formatTime)
			} else {
				return moment(timeString).format(formatTime)
			}
		},
	},
}
