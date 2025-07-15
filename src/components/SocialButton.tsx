"use client"
import { Button } from "./ui/button"

export default function SocialButton({ icon: Icon, label, url }: {
  icon: React.ElementType
  label: string
  url: string
}) {
  return (
    <Button
      variant="outline"
      size="sm"
      aria-label={`Visit ${label}`}
      onClick={() => window.open(url, "_blank")}
    >
      <Icon className="w-4 h-4 mr-2" />
      {label}
    </Button>
  )
}
