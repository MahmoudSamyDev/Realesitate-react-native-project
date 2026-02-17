import { recommendations } from "@/constants/data";
import icons from "@/constants/icons";

export function filterRecommendationsByCategory(selectedCategory: string) {
  if (selectedCategory === "All") {
    return recommendations;
  }
  return recommendations.filter(
    (item) => item.category.toLocaleLowerCase() === selectedCategory.toLocaleLowerCase(),
  );
}

export function getCardIcon(type: string) {
  switch (type) {
    case "visa":
      return icons.visa;
    case "mastercard":
      return icons.mastercard;
    case "paypal":
      return icons.paypal;
    case "apple-pay":
      return icons.applePay;
    default:
      return "";
  }
}

export function getCardColor(type: string) {
  switch (type) {
    case "visa":
      return "bg-blue-50";
    case "mastercard":
      return "bg-orange-50";
    case "paypal":
      return "bg-blue-50";
    case "apple-pay":
      return "bg-gray-50";
    default:
      return "bg-accent-100";
  }
}
