import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-green-800">Terms of Service</CardTitle>
            <p className="text-gray-600">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Booking Terms</h2>
            <p className="mb-4">By booking a tour with greenTanzania, you agree to the following terms:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>All bookings require a deposit of 30% of the total tour cost</li>
              <li>Full payment is due 30 days before departure</li>
              <li>Cancellations made 60+ days before departure: 10% penalty</li>
              <li>Cancellations made 30-59 days before departure: 50% penalty</li>
              <li>Cancellations made less than 30 days before departure: 100% penalty</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Travel Requirements</h2>
            <p className="mb-4">Travelers are responsible for:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Valid passport with at least 6 months validity</li>
              <li>Appropriate visas for travel destinations</li>
              <li>Travel insurance coverage</li>
              <li>Required vaccinations and health certificates</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Liability</h2>
            <p className="mb-4">
              greenTanzania acts as an agent for various service providers and is not liable for their acts or
              omissions. We recommend comprehensive travel insurance.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">For questions about these terms, contact us at:</p>
            <p className="mb-2">Email: legal@greentanzania.com</p>
            <p className="mb-2">Phone: +255 123 456 789</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
