import Link from 'next/link';
import { ArrowRight, Book, Code, Zap, Shield, Globe, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">MCP Docs</h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/getting-started" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Getting Started
                  </Link>
                  <Link href="/api-reference" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    API Reference
                  </Link>
                  <Link href="/examples" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Examples
                  </Link>
                  <Link href="/guides" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Model Context</span>{' '}
                  <span className="block text-blue-400 xl:inline">Protocol</span>
                </h1>
                <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A standardized protocol for AI models to securely access external tools and data sources. 
                  Build powerful AI applications with seamless integrations.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/getting-started"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="/api-reference"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-400 bg-slate-800 hover:bg-slate-700 md:py-4 md:text-lg md:px-10"
                    >
                      API Reference
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Everything you need to build with MCP
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Fast Integration</p>
                <p className="mt-2 ml-16 text-base text-slate-300">
                  Quick setup and integration with existing AI applications. Get up and running in minutes.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Secure by Design</p>
                <p className="mt-2 ml-16 text-base text-slate-300">
                  Built-in security features and sandboxing to protect your applications and data.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Developer Friendly</p>
                <p className="mt-2 ml-16 text-base text-slate-300">
                  Simple APIs, comprehensive documentation, and extensive examples to get you started.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <Globe className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Universal Protocol</p>
                <p className="mt-2 ml-16 text-base text-slate-300">
                  Works across different AI models and platforms with a standardized interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Quick Links</h2>
            <p className="mt-4 text-lg text-slate-300">Jump right into what you need</p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/getting-started" className="group relative bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-500 text-white">
                  <Book className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  Getting Started
                  <span className="absolute inset-0" aria-hidden="true" />
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Learn the basics and set up your first MCP integration.
                </p>
              </div>
            </Link>

            <Link href="/api-reference" className="group relative bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-500 text-white">
                  <Code className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  API Reference
                  <span className="absolute inset-0" aria-hidden="true" />
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Complete API documentation with all endpoints and parameters.
                </p>
              </div>
            </Link>

            <Link href="/examples" className="group relative bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-blue-500 text-white">
                  <Users className="h-6 w-6" />
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-white">
                  Examples
                  <span className="absolute inset-0" aria-hidden="true" />
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Real-world examples and code samples to inspire your projects.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

