import type { SelectOption } from "@/modules/shared/types/formField";

export const onboardingTimezoneOptions: SelectOption[] = [
  // North America
  { label: "Hawaii (UTC-10:00)", value: "Pacific/Honolulu" },
  { label: "Alaska (UTC-09:00)", value: "America/Anchorage" },
  { label: "Pacific Time (US & Canada)", value: "America/Los_Angeles" },
  { label: "Mountain Time (US & Canada)", value: "America/Denver" },
  { label: "Central Time (US & Canada)", value: "America/Chicago" },
  { label: "Eastern Time (US & Canada)", value: "America/New_York" },
  { label: "Arizona", value: "America/Phoenix" },
  { label: "Mexico City", value: "America/Mexico_City" },

  // Central America
  { label: "Guatemala", value: "America/Guatemala" },
  { label: "El Salvador", value: "America/El_Salvador" },
  { label: "Honduras", value: "America/Tegucigalpa" },
  { label: "Nicaragua", value: "America/Managua" },
  { label: "Costa Rica", value: "America/Costa_Rica" },
  { label: "Panama", value: "America/Panama" },

  // South America
  { label: "Lima, Peru", value: "America/Lima" },
  { label: "Bogotá, Colombia", value: "America/Bogota" },
  { label: "Quito, Ecuador", value: "America/Guayaquil" },
  { label: "Caracas, Venezuela", value: "America/Caracas" },
  { label: "La Paz, Bolivia", value: "America/La_Paz" },
  { label: "Santiago, Chile", value: "America/Santiago" },
  { label: "Buenos Aires, Argentina", value: "America/Argentina/Buenos_Aires" },
  { label: "Asunción, Paraguay", value: "America/Asuncion" },
  { label: "Montevideo, Uruguay", value: "America/Montevideo" },
  { label: "São Paulo, Brazil", value: "America/Sao_Paulo" },
  { label: "Manaus, Brazil", value: "America/Manaus" },

  // Europe
  { label: "London, United Kingdom", value: "Europe/London" },
  { label: "Dublin, Ireland", value: "Europe/Dublin" },
  { label: "Lisbon, Portugal", value: "Europe/Lisbon" },
  { label: "Madrid, Spain", value: "Europe/Madrid" },
  { label: "Paris, France", value: "Europe/Paris" },
  { label: "Berlin, Germany", value: "Europe/Berlin" },
  { label: "Rome, Italy", value: "Europe/Rome" },
  { label: "Amsterdam, Netherlands", value: "Europe/Amsterdam" },
  { label: "Brussels, Belgium", value: "Europe/Brussels" },
  { label: "Zurich, Switzerland", value: "Europe/Zurich" },
  { label: "Vienna, Austria", value: "Europe/Vienna" },
  { label: "Warsaw, Poland", value: "Europe/Warsaw" },
  { label: "Athens, Greece", value: "Europe/Athens" },
  { label: "Helsinki, Finland", value: "Europe/Helsinki" },
  { label: "Bucharest, Romania", value: "Europe/Bucharest" },
  { label: "Istanbul, Turkey", value: "Europe/Istanbul" },

  // Africa
  { label: "Cairo, Egypt", value: "Africa/Cairo" },
  { label: "Casablanca, Morocco", value: "Africa/Casablanca" },
  { label: "Lagos, Nigeria", value: "Africa/Lagos" },
  { label: "Nairobi, Kenya", value: "Africa/Nairobi" },
  { label: "Johannesburg, South Africa", value: "Africa/Johannesburg" },

  // Asia
  { label: "Dubai, UAE", value: "Asia/Dubai" },
  { label: "Riyadh, Saudi Arabia", value: "Asia/Riyadh" },
  { label: "Jerusalem, Israel", value: "Asia/Jerusalem" },
  { label: "Kolkata, India", value: "Asia/Kolkata" },
  { label: "Bangkok, Thailand", value: "Asia/Bangkok" },
  { label: "Jakarta, Indonesia", value: "Asia/Jakarta" },
  { label: "Singapore", value: "Asia/Singapore" },
  { label: "Hong Kong", value: "Asia/Hong_Kong" },
  { label: "Shanghai, China", value: "Asia/Shanghai" },
  { label: "Taipei, Taiwan", value: "Asia/Taipei" },
  { label: "Seoul, South Korea", value: "Asia/Seoul" },
  { label: "Tokyo, Japan", value: "Asia/Tokyo" },

  // Oceania
  { label: "Perth, Australia", value: "Australia/Perth" },
  { label: "Adelaide, Australia", value: "Australia/Adelaide" },
  { label: "Brisbane, Australia", value: "Australia/Brisbane" },
  { label: "Sydney, Australia", value: "Australia/Sydney" },
  { label: "Melbourne, Australia", value: "Australia/Melbourne" },
  { label: "Auckland, New Zealand", value: "Pacific/Auckland" },
];
