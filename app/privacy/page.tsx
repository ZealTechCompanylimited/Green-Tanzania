import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-green-800">Privacy Policy</CardTitle>
            <p className="text-gray-600">Last updated: December 2024</p>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Information We Collect</h2>
            <p className="mb-4">
              At greenTanzania, we collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Book a tour or safari package</li>
              <li>Contact us for information</li>
              <li>Subscribe to our newsletter</li>
              <li>Create an account on our website</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Process your bookings and provide our services</li>
              <li>Communicate with you about your trips</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve our services and website</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your
              consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Contact Us</h2>
            <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mb-2">Email: privacy@greentanzania.com</p>
            <p className="mb-2">Phone: +255 123 456 789</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
