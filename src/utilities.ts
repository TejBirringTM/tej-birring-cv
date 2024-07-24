import _dayjs from "dayjs";
import dayjsAdvancedFormat from "dayjs/plugin/advancedFormat"
import dayjsTimezone from "dayjs/plugin/timezone"
_dayjs.extend(dayjsAdvancedFormat);
_dayjs.extend(dayjsTimezone);

export const dayjs = _dayjs;

export function isPrintMode() {
    return window.matchMedia('print').matches;
}
