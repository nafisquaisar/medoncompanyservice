import {
  Snowflake,
  Refrigerator,
  Zap,
  Flame,
  Microwave,
  Wrench,
  MapPin,
  Wind,
  Thermometer,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceIconName } from "@/data/services";

const ICON_MAP: Record<ServiceIconName, LucideIcon> = {
  Snowflake,
  Refrigerator,
  Zap,
  Flame,
  Microwave,
  Wrench,
  MapPin,
  Wind,
  Thermometer,
};

export function resolveIcon(name: ServiceIconName): LucideIcon {
  return ICON_MAP[name] ?? Wrench;
}
