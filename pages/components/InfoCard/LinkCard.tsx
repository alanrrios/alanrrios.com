import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ProductLink {
  title: string;
  url: string;
  href: string;
}

const productLinks: ProductLink[] = [
  { 
    title: 'budgiter', 
    url: 'budgiter.com',
    href: 'https://budgiter.com'
  },
]

interface LinkCardProps {
  pageTitle: string;
}

export default function LinkCard({ pageTitle }: LinkCardProps) {
  const productLink = productLinks.find(link => link.title === pageTitle)

  if (!productLink) {
    return <div className='p-0 h-min text-muted-foreground'>product link missing</div>; 
  }

  return (
    <Button variant="link" className='p-0 h-min text-muted-foreground' asChild>
      <Link 
        href={productLink.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {productLink.url}
      </Link>
    </Button>
  )
}