import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b border-blue-100 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <FileText className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900">Quill</span>
              <Badge
                variant="secondary"
                className="ml-2 text-xs bg-blue-100 text-blue-700"
              >
                Beta
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">Last updated: August 3, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p className="text-gray-700 mb-4">
                At Quill, we take your privacy seriously. This Privacy Policy
                explains how we collect, use, and protect your information when
                you use our note-taking application during the beta period and
                beyond.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Beta Program Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                During our beta program, we may collect additional information
                to improve the app:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Beta feedback and usage patterns</li>
                <li>Crash reports and performance data</li>
                <li>Feature usage analytics (anonymized)</li>
                <li>Beta tester communications and feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Personal Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Notes and content you create within the app</li>
                <li>
                  Voice recordings (stored locally on your device with
                  encryption)
                </li>
                <li>App usage analytics (anonymized)</li>
                <li>Email address (for beta program participants)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Device Information
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Device type and operating system version</li>
                <li>App version and crash reports</li>
                <li>General location (country/region) for analytics</li>
                <li>Device performance metrics during beta testing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>To provide and maintain the Quill service</li>
                <li>
                  To improve app functionality and user experience during beta
                </li>
                <li>
                  To provide customer support and beta program communications
                </li>
                <li>To analyze app usage patterns (anonymized data only)</li>
                <li>To develop new features based on beta feedback</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Storage and Security
              </h2>
              <p className="text-gray-700 mb-4">
                Your notes are primarily stored locally on your device with
                military-grade encryption. We implement comprehensive security
                measures:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  End-to-end encryption for all notes and voice recordings
                </li>
                <li>Biometric authentication for private notes</li>
                <li>Secure transmission protocols for any cloud features</li>
                <li>Regular security audits and updates</li>
                <li>
                  Zero-knowledge architecture - we cannot access your private
                  content
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Sharing
              </h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties. We may share anonymized,
                aggregated data for analytics and research purposes during the
                beta program.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Delete your data and exit the beta program</li>
                <li>Export your notes in standard formats</li>
                <li>Opt-out of analytics and beta communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Beta Program Specific Terms
              </h2>
              <p className="text-gray-700 mb-4">
                As a beta participant, please note:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  Beta versions may have additional logging for debugging
                  purposes
                </li>
                <li>Your feedback may be used to improve the product</li>
                <li>
                  Beta data will be migrated to the final version upon launch
                </li>
                <li>You can exit the beta program at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Children's Privacy
              </h2>
              <p className="text-gray-700 mb-4">
                Quill is not intended for children under 13. We do not knowingly
                collect personal information from children under 13. Beta access
                is restricted to users 18 and older.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time, especially
                during the beta period. We will notify you of any changes by
                posting the new Privacy Policy on this page and updating the
                "Last updated" date. Beta participants will receive email
                notifications of significant changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy or the beta
                program, please contact us at:
              </p>
              <p className="text-gray-700">Email: mwaynenjogu@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
