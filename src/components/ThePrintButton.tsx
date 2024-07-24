import config from "@data/configuration";
import {dayjs} from "@/utilities";
import PrinterIcon from '@/icons/printer.svg?react';

export default function ThePrintButton() {
    const dateString = dayjs().format("Do MMM YYYY @ HH:mm z");
    function onClick() {
        window.print();
    }
    return (
        <div>
            <div className="py-2.5 px-3.5 bg-primary rounded print:hidden select-none cursor-pointer shadow-lg transition-all hover:shadow-xl hover:scale-105 active:shadow active:scale-95 scale-100 flex items-center" onClick={onClick}>
                <PrinterIcon className="fill-white size-4 mr-2" />
                <span className="text-sm text-white">Save / Print</span>
            </div>
            <div className="hidden print:block text-secondary text-sm leading-tight">
                <p id="print-notice">
                    Snapshot of <a className="underline" href={config.url}>{config.url}</a>
                </p>
                <p id="print-notice">
                    taken {dateString}
                </p>
            </div>
        </div>
    )
}


