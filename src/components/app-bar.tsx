import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"
import { ModeToggle } from "./theme-toggle"

type AppBarProps = {
  onMenuClick?: () => void
  user?: {
    name?: string
    email?: string
    image?: string
  }
}

export function AppBar({ onMenuClick, user }: AppBarProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <h1 className="text-xl font-semibold">skiller.io</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
