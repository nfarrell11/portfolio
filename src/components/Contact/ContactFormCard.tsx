import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import ContactForm from "./ContactForm"

export default function ContactFormCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          I&apos;d love to hear from you. Send me a message and I&apos;ll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm />
      </CardContent>
    </Card>
  )
}
