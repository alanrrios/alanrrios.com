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

interface PageInfo {
  title: string;
  description: string;
  content: string;
}

const pageDetails: PageInfo[] = [
  {
    title: "budgiter",
    description: "the budgeting way",
    content: "empowers people to effortlessly track expenses, set goals, and regain control of finances with ease and confidence as the ultimate budgeting app that simplifies financial management for all"
  },
]

interface InfoCardProps {
  pageTitle: string;
}

export default function InfoCard({ pageTitle }: InfoCardProps) {
  const pageInfo = pageDetails.find(page => page.title === pageTitle)

  if (!pageInfo) {
    return <div>Product not found</div>
  }

  return (
    <Card className="w-[350px] p-6 space-y-3 text-center">
      <CardHeader className="p-0">
        <CardTitle>{pageInfo.title}</CardTitle>
        <CardDescription>{pageInfo.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        {pageInfo.content}
      </CardContent>
      <CardFooter className="p-0 justify-center">
        <LinkCard pageTitle={pageTitle} />
      </CardFooter>
    </Card>
  )
}