import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-gray-600 mb-8">Last updated: August 3, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Agreement to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By downloading, installing, or using the Quill note-taking
                application ("Service"), including participation in our beta
                program, you agree to be bound by these Terms of Service
                ("Terms"). If you disagree with any part of these terms, you may
                not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Beta Program Terms
              </h2>
              <p className="text-gray-700 mb-4">
                Quill is currently in beta testing. By participating in the beta
                program, you acknowledge:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>
                  The software is pre-release and may contain bugs or incomplete
                  features
                </li>
                <li>
                  Your feedback and usage data help improve the final product
                </li>
                <li>Beta access may be revoked at any time</li>
                <li>Features may change or be removed before final release</li>
                <li>
                  You agree to provide constructive feedback when requested
                </li>
                <li>Beta versions are provided "as-is" without warranty</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Description of Service
              </h2>
              <p className="text-gray-700 mb-4">
                Quill is a note-taking application that allows users to create,
                organize, and manage personal notes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Text-based notes and lists</li>
                <li>Voice recordings with transcription</li>
                <li>Password-protected private notes with encryption</li>
                <li>Daily routine organization and planning</li>
                <li>AI-powered smart features and suggestions</li>
                <li>Cross-device synchronization (when available)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                User Accounts and Responsibilities
              </h2>
              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Account Security
              </h3>
              <p className="text-gray-700 mb-4">
                You are responsible for maintaining the security of your device
                and any passwords you create for private notes within the app.
                This includes biometric authentication settings and device
                security.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                Acceptable Use
              </h3>
              <p className="text-gray-700 mb-4">
                You agree not to use the Service to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Store illegal, harmful, or offensive content</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to reverse engineer or modify the app</li>
                <li>Share copyrighted material without permission</li>
                <li>Interfere with the beta testing process</li>
                <li>Share beta versions with non-participants</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-700 mb-4">
                The Quill application, including its design, features, and
                functionality, is owned by us and protected by copyright,
                trademark, and other intellectual property laws.
              </p>
              <p className="text-gray-700 mb-4">
                You retain ownership of the content you create using Quill. We
                do not claim ownership of your notes, voice recordings, or other
                personal content. However, by participating in the beta program,
                you grant us permission to analyze usage patterns to improve the
                service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Privacy and Data
              </h2>
              <p className="text-gray-700 mb-4">
                Your privacy is important to us. Please review our Privacy
                Policy, which also governs your use of the Service, to
                understand our practices regarding beta testing and data
                collection.
              </p>
              <p className="text-gray-700 mb-4">
                You acknowledge that your notes are primarily stored locally on
                your device with end-to-end encryption, and you are responsible
                for backing up your data during the beta period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Service Availability
              </h2>
              <p className="text-gray-700 mb-4">
                We strive to maintain the Service, but during the beta period,
                the service may be more frequently unavailable due to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Beta testing and updates</li>
                <li>Technical difficulties and debugging</li>
                <li>Server maintenance and improvements</li>
                <li>Factors beyond our control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Beta Testing Disclaimer
              </h2>
              <p className="text-gray-700 mb-4">
                THE BETA VERSION OF QUILL IS PROVIDED "AS IS" AND "AS AVAILABLE"
                WITHOUT WARRANTIES OF ANY KIND. We make no guarantees about the
                reliability, availability, or performance of the beta software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Limitation of Liability
              </h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, we shall not be liable
                for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of data,
                loss of profits, or business interruption, especially during the
                beta testing period.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Updates and Modifications
              </h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify or update the Service and these
                Terms at any time, especially during the beta period. Beta
                participants will be notified of significant changes through the
                app or email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibent text-gray-900 mb-4">
                Termination
              </h2>
              <p className="text-gray-700 mb-4">
                You may stop using the Service at any time by uninstalling the
                app and requesting removal from the beta program. We may
                terminate or suspend access to the Service immediately, without
                prior notice, for conduct that we believe violates these Terms
                or disrupts the beta testing process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Transition from Beta
              </h2>
              <p className="text-gray-700 mb-4">
                When Quill transitions from beta to general availability:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Your data will be migrated to the production version</li>
                <li>New terms may apply to the production service</li>
                <li>
                  Beta participants may receive special pricing or features
                </li>
                <li>You will be notified of the transition timeline</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Governing Law
              </h2>
              <p className="text-gray-700 mb-4">
                These Terms shall be governed by and construed in accordance
                with the laws of [Your Jurisdiction], without regard to its
                conflict of law provisions.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about these Terms of Service or the
                beta program, please contact us at:
              </p>
              <p className="text-gray-700">Email: mwaynenjogu@gmail.com</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
