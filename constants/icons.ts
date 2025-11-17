import BusIcon from "@/assets/icons/bus-icon.svg";
import CalendarIcon from "@/assets/icons/calendar-icon.svg";
import CheckIcon from "@/assets/icons/check-icon.svg";
import ChevronDownIcon from "@/assets/icons/chevron-down-icon.svg";
import ChevronLeftIcon from "@/assets/icons/chevron-left-icon.svg";
import ChevronRightIcon from "@/assets/icons/chevron-right-icon.svg";
import ChevronUpIcon from "@/assets/icons/chevron-up-icon.svg";
import PlaneIcon from "@/assets/icons/plane-icon.svg";
import HotelIcon from "@/assets/icons/hotel-icon.svg";
import SearchIcon from "@/assets/icons/search-icon.svg";
import UserIcon from "@/assets/icons/user-icon.svg";
import TransferIcon from "@/assets/icons/line-transfer-icon.svg";

export const icons = {
  bus: { component: BusIcon, viewBox: "0 0 23 21" },
  calendar: { component: CalendarIcon, viewBox: "0 0 16 15" },
  check: { component: CheckIcon, viewBox: "0 0 12 9" },
  chevronDown: { component: ChevronDownIcon, viewBox: "0 0 24 24" },
  chevronLeft: { component: ChevronLeftIcon, viewBox: "0 0 24 24" },
  chevronRight: { component: ChevronRightIcon, viewBox: "0 0 24 24" },
  chevronUp: { component: ChevronUpIcon, viewBox: "0 0 24 24" },
  plane: { component: PlaneIcon, viewBox: "0 0 26 26" },
  hotel: { component: HotelIcon, viewBox: "0 0 21 21" },
  search: { component: SearchIcon, viewBox: "0 0 16 16" },
  user: { component: UserIcon, viewBox: "0 0 17 15" },
  transfer: { component: TransferIcon, viewBox: "0 0 19 17" },
};

export type IconName = keyof typeof icons;
