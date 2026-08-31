import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "./ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { useState } from "react"
import type { Props } from "./add-text-card"
import { initialMemeState } from "@/lib/utils"

export default function ImageUploadCard({ memeState, setMemeState }: Props) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedImage(file)
      console.log(selectedImage)

      const url = URL.createObjectURL(file)
      setMemeState((prev) => ({ ...prev, imageUrl: url }))
    }
  }

  const handleClearImage = () => {
    setMemeState(initialMemeState)
  }
  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>1.Upload Image</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full">
          <form className="flex w-full flex-col gap-2">
            <div className="flex w-full items-center space-x-4 rounded-md border border-dashed border-gray-400 bg-primary/5 px-6 py-10">
              <div className="flex w-full flex-col items-center justify-center sm:gap-x-3">
                <Upload
                  aria-hidden={true}
                  className="mx-auto h-8 w-8 text-primary sm:mx-0 sm:h-6 sm:w-6"
                />
                <div className="mt-4 flex text-sm leading-6 text-foreground sm:mt-0">
                  <p>Drag and drop or</p>
                  <Label
                    className="relative cursor-pointer rounded-sm pl-1 font-medium text-primary hover:underline hover:underline-offset-4"
                    htmlFor="file-upload-4"
                  >
                    <span>choose file</span>
                    <Input
                      className="sr-only"
                      id="file-upload-4"
                      name="file-upload-4"
                      type="file"
                      onChange={handleImageUpload}
                    />
                  </Label>
                  <p className="pl-1 text-pretty">to upload</p>
                </div>
              </div>
            </div>
            {/* <p className="mt-2 flex items-center justify-between text-xs leading-5 text-pretty text-muted-foreground">
              Recommended max. size: 10 MB, Accepted file types: XLSX, XLS, CSV.
            </p> */}
            {memeState.imageUrl != "/upload.png" && (
              <div className="relative rounded-lg bg-muted p-3">
                <div className="absolute top-1 right-1">
                  <Button
                    aria-label="Remove"
                    className="rounded-sm p-2 text-muted-foreground hover:text-foreground"
                    size="sm"
                    type="button"
                    variant="ghost"
                    onClick={handleClearImage}
                  >
                    <X aria-hidden={true} className="size-4 shrink-0" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center p-2">
                    <img src={memeState.imageUrl} alt={"file image icon"} />
                  </span>
                  <div className="w-full">
                    <p className="text-xs font-medium text-pretty text-foreground">
                      {selectedImage?.name}
                    </p>
                    <p className="mt-0.5 flex justify-between text-xs text-pretty text-muted-foreground">
                      {selectedImage && (
                        <span>
                          {(selectedImage.size / (1024 * 1024)).toFixed(2)} MB
                        </span>
                      )}
                      <span>Completed</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
