export default function useColor() {
  const bgOrGradientClass = (color: string, colorGradient: string) => {
    if (colorGradient) {
      return `bg-gradient-to-r from-${color} to-${colorGradient}` // TODO: Don't concat tailwind classes! from-royalBlue to-affair from-outrageousOrange to-lipstick from-mountainMeadow to-bondiBlue
    }
    return `bg-${color}`
  }

  return {
    bgOrGradientClass
  }
}
