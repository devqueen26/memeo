import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

export type MemeState = {
  // Image
  imageUrl: string
  // Top Text
  topText: string
  topTextColor: string
  topTextFontWeight: string
  // Bottom Text
  bottomText: string
  bottomTextColor: string
  bottomTextFontWeight: string

  // Both Text Styles
  textSize: number[]
  isOutline: boolean
  outlineColor: string
}

export type Props = {
  memeState: MemeState
  setMemeState: React.Dispatch<React.SetStateAction<MemeState>>
}

const AddText = ({ memeState, setMemeState }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setMemeState((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>2. Add Text</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex w-full flex-col gap-2">
          {/* TOP TEXT */}
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <Label htmlFor="top-text">Top Text</Label>
              <span className="text-gray-400 italic">
                {memeState.topText.length}/30
              </span>
            </div>
            {/* TEXT INPUT */}
            <Input
              id="top-text"
              name="topText"
              value={memeState.topText}
              onChange={handleChange}
              maxLength={30}
              disabled={memeState.imageUrl == "/upload.png"}
            />
            {/* STYLES */}
            <div className="flex items-center gap-4">
              {/* CHOOSE TEXT FONT WEIGHT */}
              <div className="w-full max-w-xs space-y-2">
                <Select
                  name="topTextFontWeight"
                  value={memeState.topTextFontWeight}
                  onValueChange={(value) =>
                    setMemeState((prev) => ({
                      ...prev,
                      topTextFontWeight: value,
                    }))
                  }
                  defaultValue="700"
                >
                  <SelectTrigger
                    id={"topTextFontWeight"}
                    className="relative w-full pl-9"
                  >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 group-has-[select[disabled]]:opacity-50">
                      <span
                        className={`${memeState.topTextFontWeight} text-primary`}
                      >
                        A
                      </span>
                    </div>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent side="bottom" className="p-1">
                    <SelectGroup>
                      <SelectItem className="normal" value="400">
                        Normal
                      </SelectItem>
                      <SelectItem className="font-medium" value="500">
                        Medium
                      </SelectItem>
                      <SelectItem className="font-semibold" value="600">
                        Semi-bold
                      </SelectItem>
                      <SelectItem className="font-bold" value="700">
                        Bold
                      </SelectItem>
                      <SelectItem className="font-extrabold" value="800">
                        Extra Bold
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* CHOOSE TEXT COLOR */}
              <Input
                name="topTextColor"
                type="color"
                value={memeState.topTextColor}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="flex w-full flex-col gap-2">
            <div className="flex w-full items-center justify-between">
              <Label htmlFor="bottom-text">Bottom Text</Label>
              <span className="text-gray-400 italic">
                {memeState.bottomText.length}/30
              </span>
            </div>
            {/* TEXT INPUT */}
            <Input
              id="bottom-text"
              name="bottomText"
              value={memeState.bottomText}
              onChange={handleChange}
              maxLength={30}
              disabled={memeState.imageUrl == "/upload.png"}
            />
            {/* STYLES */}
            <div className="flex items-center gap-4">
              {/* CHOOSE TEXT FONT WEIGHT */}
              <div className="w-full max-w-xs space-y-2">
                <Select
                  name="bottomTextFontWeight"
                  value={memeState.bottomTextFontWeight}
                  onValueChange={(value) =>
                    setMemeState((prev) => ({
                      ...prev,
                      bottomTextFontWeight: value,
                    }))
                  }
                  defaultValue="700"
                >
                  <SelectTrigger
                    id={"bottomTextFontWeight"}
                    className="relative w-full pl-9"
                  >
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 group-has-[select[disabled]]:opacity-50">
                      <span
                        className={`${memeState.bottomTextFontWeight} text-primary`}
                      >
                        A
                      </span>
                    </div>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent side="bottom" className="p-1">
                    <SelectGroup>
                      <SelectItem className="normal" value="400">
                        Normal
                      </SelectItem>
                      <SelectItem className="font-medium" value="500">
                        Medium
                      </SelectItem>
                      <SelectItem className="font-semibold" value="600">
                        Semi-bold
                      </SelectItem>
                      <SelectItem className="font-bold" value="700">
                        Bold
                      </SelectItem>
                      <SelectItem className="font-extrabold" value="800">
                        Extra Bold
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              {/* CHOOSE TEXT COLOR */}
              <div className="w-full max-w-xs space-y-2">
                <Input
                  name="bottomTextColor"
                  type="color"
                  value={memeState.bottomTextColor}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddText
