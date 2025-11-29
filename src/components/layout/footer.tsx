import { Separator } from "@/components/common/separator";
import { Typography } from "@/components/common/typography";

export function Footer() {
  return (
    <footer className="mt-14 w-full bg-background">
      <div className="max-w-3xl mx-auto px-8">
        <Separator />
        <Typography
          variant="body"
          className="my-8 text-center"
        >{`© ${new Date().getFullYear()} Ceri Morse. All Rights Reserved.`}</Typography>
      </div>
    </footer>
  );
}
