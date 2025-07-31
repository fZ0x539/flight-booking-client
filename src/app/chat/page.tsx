import ChatForm from "@/components/ChatForm";
import WelcomeMenu from "@/components/WelcomeMenu";

export default function page() {
  return (
    <>
      <div className="min-h-screen flex flex-col">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-3xl">
            <div className="mt-5">
              <h1 className="text-2xl font-medium">Flight Booking Assistant</h1>
              <p className="font-light">AI-powered flight search and booking</p>
              <div className="relative">
                <div className="absolute left-1/2 w-[107%] -translate-x-1/2 border-b-[0.5px] border-gray-400 mt-3" />
              </div>
            </div>
          </div>
        </div>

        <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto max-w-3xl py-6">
            <WelcomeMenu/>
          </div>
        </main>


        <footer className="bg-gray-50 py-2 border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center text-sm text-gray-700">
              <p>© 2025 LexiFlight. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
