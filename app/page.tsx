import LandingHome from "@/components/Home/LandingHome";
import Link from "next/link";


export default function Home() {

  return (
    <>
      <main className="flex-1">
        <LandingHome/>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose Our Platform?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our vacation and college trip planning platform offers a
                  seamless experience, from discovering the perfect destination
                  to booking and managing your trip.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl my-10 items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">
                  Personalized Recommendations
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our platform uses your preferences to suggest the best trips
                  for you, making it easy to find your perfect vacation or
                  college adventure.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Collaborative Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Invite friends and family to collaborate on planning your
                  trip, ensuring everyone's needs are met.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Booking</h3>
                <p className="text-sm text-muted-foreground">
                  Book flights, accommodations, and activities all in one place,
                  with secure payment and easy management.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our dedicated customer support team is available around the
                  clock to assist you with any questions or concerns.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Flexible Itineraries</h3>
                <p className="text-sm text-muted-foreground">
                  Customize your trip itinerary to fit your schedule and
                  preferences, with the ability to make changes on the go.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Trusted by Millions</h3>
                <p className="text-sm text-muted-foreground">
                  Our platform has been used by millions of travelers to plan
                  their dream vacations and college trips.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-xl bg-muted px-3 py-1 text-sm">
                  Popular Destinations
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore the World with Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From tropical beaches to bustling cities, our platform offers
                  a wide range of destinations to suit every traveler's
                  preferences.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/Images/Travel1.jpg"
                  width="550"
                  height="310"
                  alt="Destination 1"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Paris, France</h3>
                  <p className="text-sm text-muted-foreground my-2">
                    Explore the City of Light and its iconic landmarks.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Trips
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/Images/Travel2.jpg"
                  width="550"
                  height="310"
                  alt="Destination 2"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">Maui, Hawaii</h3>
                  <p className="text-sm text-muted-foreground my-2">
                    Relax on the beautiful beaches of this tropical paradise.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Trips
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/Images/Travel3.jpg"
                  width="550"
                  height="310"
                  alt="Destination 3"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">New York City, USA</h3>
                  <p className="text-sm text-muted-foreground my-2">
                    Experience the energy and excitement of the Big Apple.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex h-9 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    View Trips
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
