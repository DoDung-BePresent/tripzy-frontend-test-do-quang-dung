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

export const icons = {
  bus: BusIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
  chevronDown: ChevronDownIcon,
  chevronLeft: ChevronLeftIcon,
  chevronRight: ChevronRightIcon,
  chevronUp: ChevronUpIcon,
  plane: PlaneIcon,
  hotel: HotelIcon,
  search: SearchIcon,
  user: UserIcon,
};

export type IconName = keyof typeof icons;
