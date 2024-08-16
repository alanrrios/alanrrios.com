import * as React from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import LinkCard from "./LinkCard" 

interface ProductInfo {
  title: string;
  description: string;
  content: string;
}

const productDetails: ProductInfo[] = [
  {
    title: "budgiter",
    description: "the budgeting way",
    content: "empowers people to effortlessly track expenses, set goals, and regain control of finances with ease and confidence as the ultimate budgeting app that simplifies financial management for all"
  },
]

interface InfoCardProps {
  productTitle: string;
}

export default function InfoCard({ productTitle }: InfoCardProps) {
  const productInfo = productDetails.find(product => product.title === productTitle)

  if (!productInfo) {
    return <div>Product not found</div>
  }

  return (
    <Card className="w-[350px] p-6 space-y-3 text-center">
      <CardHeader className="p-0">
        <CardTitle>{productInfo.title}</CardTitle>
        <CardDescription>{productInfo.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {productInfo.content}
      </CardContent>
      <CardFooter className="p-0 justify-center">
        <LinkCard productTitle={productTitle} />
      </CardFooter>
    </Card>
  )
}