import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

// jhipster-needle-i18n-language-dayjs-imports - JHipster will import languages from dayjs here
import 'dayjs/locale/en';
import 'dayjs/locale/cs';
import 'dayjs/locale/et';
import 'dayjs/locale/de';
import 'dayjs/locale/ko';
import 'dayjs/locale/ro';
import 'dayjs/locale/ru';
import 'dayjs/locale/es';
import 'dayjs/locale/sv';
import 'dayjs/locale/tr';

// DAYJS CONFIGURATION
dayjs.extend(customParseFormat);
dayjs.extend(duration);
dayjs.extend(relativeTime);
