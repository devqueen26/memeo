import { Download, FaceGrinning } from "lucide-react"
import { ModeToggle } from "./components/mode-toggle"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Button } from "./components/ui/button"
import { RotateCcw } from "lucide-react"
import AddText from "./components/add-text-card"
import { useState } from "react"
import TextStyles from "./components/text-styles-card"
import ImageUploadCard from "./components/image-upload-card"
import { initialMemeState } from "./lib/utils"
import * as htmlToImage from "html-to-image"
import download from "downloadjs"
export function App() {
  const [memeState, setMemeState] = useState(initialMemeState)

  const handleReset = () => {
    setMemeState(initialMemeState)
  }

  const handleDownload = () => {
    const node = document.getElementById("meme-image")

    if (node)
      htmlToImage
        .toPng(node)
        .then((dataUrl) => download(dataUrl, "my-memeo-meme.png"))
  }
  return (
    <div className="h-screen w-full bg-background">
      <div className="w-full p-4">
        <header className="flex w-full items-center justify-between gap-1 rounded-full px-4 py-2 shadow-md">
          <div className="flex items-center">
            <FaceGrinning className="size-10 text-primary" />
            <div className="flex flex-col">
              <h1 className="text-2xl font-medium text-primary">Memeo</h1>
              <p className="-mt-1 text-sm text-gray-400">
                Create. Caption. Download
              </p>
            </div>
          </div>
          <ModeToggle />
        </header>

        <div className="grid grid-cols-5 py-8">
          {/* IMAGE SETTINGS */}
          <aside className="col-span-2 flex flex-col gap-2">
            <ImageUploadCard
              memeState={memeState}
              setMemeState={setMemeState}
            />
            <AddText memeState={memeState} setMemeState={setMemeState} />
            <TextStyles memeState={memeState} setMemeState={setMemeState} />
          </aside>

          {/* IMAGE */}
          <div className="col-span-3 place-items-end">
            <Card className="w-full max-w-3xl border-none! shadow-md">
              <CardHeader className="flex items-center justify-between">
                <CardTitle>Meme Preview</CardTitle>
                <Button
                  variant={"outline"}
                  className="text-gray-400"
                  onClick={handleReset}
                >
                  <RotateCcw /> Reset
                </Button>
              </CardHeader>
              <CardContent className="relative">
                <div
                  id="meme-image"
                  className="rounded-m mx-auto flex h-115 w-full flex-col items-center justify-center overflow-hidden"
                >
                  <h2
                    className={`text- absolute top-8 left-1/2 w-[90%] -translate-x-1/2 text-center text-wrap wrap-break-word`}
                    style={{
                      color: memeState.topTextColor,
                      fontWeight: memeState.topTextFontWeight,
                      fontSize: memeState.textSize[0],
                      WebkitTextStroke: memeState.isOutline
                        ? `2px ${memeState.outlineColor}`
                        : "",
                    }}
                  >
                    {memeState.topText.toUpperCase()}
                  </h2>

                  <img
                    src={memeState.imageUrl}
                    alt="Meme"
                    className={
                      memeState.imageUrl == "/upload.png"
                        ? "mx-auto h-50 w-50 object-contain"
                        : "h-full w-full rounded-md object-center"
                    }
                  />
                  <h2
                    className={`absolute bottom-8 left-1/2 w-[90%] -translate-x-1/2 text-center text-wrap wrap-break-word`}
                    style={{
                      color: memeState.bottomTextColor,
                      fontWeight: memeState.bottomTextFontWeight,
                      fontSize: memeState.textSize[0],
                      WebkitTextStroke: memeState.isOutline
                        ? `2px ${memeState.outlineColor}`
                        : "",
                    }}
                  >
                    {memeState.bottomText.toUpperCase()}
                  </h2>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleDownload} className="w-full">
                  <Download /> Download Meme
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
