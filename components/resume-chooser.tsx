'use client'

import * as React from 'react'

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'

type ResumeChooserProps = {
  /** Trigger button classes (optional) */
  className?: string
  /** Trigger button text */
  label?: string
  /** URL to Software Engineering resume */
  seHref: string
  /** URL to AI resume */
  aiHref: string
}

export function ResumeChooser({
  className,
  label = 'View Resume',
  seHref,
  aiHref,
}: ResumeChooserProps) {
  const [open, setOpen] = React.useState(false)

  const openResume = React.useCallback(
    (href: string) => {
      // Ensure a direct user-initiated navigation (more reliable across browsers + modal wrappers)
      window.open(href, '_blank', 'noopener,noreferrer')
      setOpen(false)
    },
    [setOpen],
  )

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="lg"
        className={className}
        onClick={() => setOpen(true)}
      >
        {label}
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Which track do you want to explore?</AlertDialogTitle>
            <AlertDialogDescription>
              Choose the resume that best matches what you’re interested in.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Not now</AlertDialogCancel>
            <Button type="button" onClick={() => openResume(seHref)}>
              Software Engineering
            </Button>
            <Button type="button" variant="secondary" onClick={() => openResume(aiHref)}>
              Artificial Intelligence
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}


