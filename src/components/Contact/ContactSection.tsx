import ContactFormCard from "./ContactFormCard";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactFormCard />
        </div>
      </div>
    </section>
  );
}