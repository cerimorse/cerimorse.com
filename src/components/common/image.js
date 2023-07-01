"use client";

import * as React from "react";
import NextImage from "next/image";
import { loader as cloudinaryLoader } from "@/lib/cloudinary";
import { loader as flickrLoader } from "@/lib/flickr";

const Image = React.forwardRef(({ className, ...props }, ref) => (
  <NextImage ref={ref} className={className} {...props} />
));
Image.displayName = "Image";

const CloudinaryImage = React.forwardRef(({ className, ...props }, ref) => (
  <Image ref={ref} loader={cloudinaryLoader} className={className} {...props} />
));
CloudinaryImage.displayName = "CloudinaryImage";

const FlickrImage = React.forwardRef(({ className, ...props }, ref) => (
  <Image ref={ref} loader={flickrLoader} className={className} {...props} />
));
FlickrImage.displayName = "FlickrImage";

export { Image, CloudinaryImage, FlickrImage };
