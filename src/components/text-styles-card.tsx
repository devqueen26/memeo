import { Activity } from "react"
import type { Props } from "./add-text-card"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Slider } from "./ui/slider"
import { Switch } from "./ui/switch"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Square } from "lucide-react"

const TextStyles = ({ memeState, setMemeState }: Props) => {
  return (
    <div>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>3. Text Style</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <Label className="basis-1/2 font-semibold">
              Text Size{" "}
              <small className="text-xs text-gray-300">
                ({memeState.textSize}px)
              </small>
            </Label>
            <Slider
              min={20}
              max={60}
              step={1}
              value={memeState.textSize}
              onValueChange={(value) =>
                setMemeState((prev) => ({ ...prev, textSize: value }))
              }
              className="max-w-1/2"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
              <Label className="basis-1/2 font-semibold">Text Outline</Label>
              <Switch
                checked={memeState.isOutline}
                onCheckedChange={(value) =>
                  setMemeState((prev) => ({ ...prev, isOutline: value }))
                }
              />
            </div>

            <Activity mode={memeState.isOutline ? "visible" : "hidden"}>
              <div className="self-end">
                <Select
                  value={memeState.outlineColor}
                  onValueChange={(value) =>
                    setMemeState((prev) => ({ ...prev, outlineColor: value }))
                  }
                >
                  <SelectTrigger>
                    <Square
                      fill={memeState.outlineColor}
                      size={24}
                      aria-hidden="true"
                    />
                    <SelectValue placeholder="Outline Color" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="red">Red</SelectItem>
                      <SelectItem value="yellow">Yellow</SelectItem>
                      <SelectItem value="green">Green</SelectItem>
                      <SelectItem value="black">Black</SelectItem>
                      <SelectItem value="blue">Blue</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </Activity>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TextStyles
