import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
// Reusing Gravity UI icons to maintain your visual identity
import { Check } from "@gravity-ui/icons";
import { createSubscription } from "@/lib/actions/subscriptions";

export default async function Success({ searchParams }) {
  // Await searchParams in Next.js 15+
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  // Retrieve the session with expanded details
  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  const {
    status,
    customer_details: { email: customerEmail },

    amount_total,
    currency,
    line_items,
    metadata,
  } = session;

  // If the user hasn't paid yet, kick them back to the start
  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const subInfo = {
      email: customerEmail,
      planId: metadata.planId,
    };

    const result = await createSubscription(subInfo);

    console.log(result, "Result");

    // Format the Stripe amount (which is in cents) to a readable currency string
    const formattedTotal = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency || "USD",
    }).format((amount_total || 0) / 100);

    return (
      <div className="w-full min-h-screen bg-zinc-950 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          {/* Background Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-emerald-500/10 blur-3xl rounded-t-2xl pointer-events-none" />

          {/* Success Icon */}
          <div className="mx-auto w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-6 relative z-10">
            <Check className="w-8 h-8 text-emerald-400" />
          </div>

          <div className="text-center mb-8 relative z-10">
            <h1 className="text-2xl font-bold text-zinc-100 tracking-tight mb-2">
              Payment Successful!
            </h1>
            <p className="text-sm text-zinc-400">
              Thank you for your purchase. Your subscription is now active.
            </p>
          </div>

          {/* Order Details/Receipt Box */}
          <div className="bg-zinc-950/50 border border-zinc-800 rounded-xl p-5 mb-8">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">
              Order Details
            </h2>

            {/* Map through purchased items */}
            <div className="space-y-3 mb-4">
              {line_items?.data.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-zinc-300 font-medium">
                    {item.description}
                  </span>
                  <span className="text-zinc-400">
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: currency || "USD",
                    }).format(item.amount_total / 100)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="border-zinc-800 my-4" />

            <div className="flex justify-between items-center text-zinc-100 font-bold">
              <span>Total Paid</span>
              <span className="text-xl">{formattedTotal}</span>
            </div>
          </div>

          {/* Customer Info & Support */}
          <div className="text-center space-y-6">
            <p className="text-xs text-zinc-500 leading-relaxed">
              A confirmation email and receipt have been sent to{" "}
              <span className="text-zinc-300 font-medium">{customerEmail}</span>
              . If you have any questions, please contact{" "}
              <a
                href="mailto:orders@example.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                orders@example.com
              </a>
              .
            </p>

            <Link
              href="/"
              className="block w-full py-3 px-4 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm rounded-xl transition-colors duration-200 shadow-lg shadow-zinc-100/10 text-center"
            >
              Go to Home Page
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
