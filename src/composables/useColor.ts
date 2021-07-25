export default function useColor() {
  const bgOrGradientClass = (color: string, colorGradient: string) => {
    if (colorGradient) {
      return `bg-gradient-to-r from-${color} to-${colorGradient}`;
    }
    return `bg-${color}`;
  };

  return {
    bgOrGradientClass,
  };
}
