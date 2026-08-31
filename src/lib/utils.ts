import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const initialMemeState = {
  // Image
  imageUrl: "/upload.png",
  // Top Text
  topText: "",
  topTextColor: "#ffffff",
  topTextFontWeight: "font-bold",
  // Bottom Text
  bottomText: "",
  bottomTextColor: "#ffffff",
  bottomTextFontWeight: "font-bold",

  // Both Text Styles
  textSize: [50],
  isOutline: true,
  outlineColor: "black",
}
