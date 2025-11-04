import Link from 'next/link';
import { ArrowLeft, CheckCircle, Code, Download, Play } from 'lucide-react';

export default function GettingStarted() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-slate-300 hover:text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="text-xl font-bold">MCP Docs</span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/getting-started" className="text-white px-3 py-2 rounded-md text-sm font-medium bg-blue-600">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Getting Started with MCP</h1>
          <p className="text-xl text-slate-300">
            Learn how to integrate the Model Context Protocol into your AI applications in just a few steps.
          </p>
        </div>

        {/* What is MCP */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">What is MCP?</h2>
          <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">
              The Model Context Protocol (MCP) is an open standard that enables AI models to securely access 
              external tools, data sources, and services. It provides a standardized way for AI applications 
              to extend their capabilities beyond their training data.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Secure sandboxed execution</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Standardized protocol</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Easy integration</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <span className="text-slate-300">Cross-platform support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Installation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Installation</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center">
                <Download className="h-5 w-5 mr-2 text-blue-400" />
                Install the MCP SDK
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                <code className="text-green-400 font-mono">
                  npm install @modelcontextprotocol/sdk
                </code>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Alternative: Using Yarn</h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
                <code className="text-green-400 font-mono">
                  yarn add @modelcontextprotocol/sdk
                </code>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Start</h2>
          <div className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Code className="h-5 w-5 mr-2 text-blue-400" />
                1. Initialize MCP Client
              </h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 overflow-x-auto">
                <pre className="text-sm text-slate-300">
                  <code>{`import { MCPClient } from '@modelcontextprotocol/sdk';

const client = new MCPClient({
  serverUrl: 'ws://localhost:8080',
  capabilities: ['tools', 'resources']
});

await client.connect();`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">2. Define Tools</h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 overflow-x-auto">
                <pre className="text-sm text-slate-300">
                  <code>{`const tools = [
  {
    name: 'calculator',
    description: 'Perform basic math operations',
    inputSchema: {
      type: 'object',
      properties: {
        operation: { type: 'string' },
        a: { type: 'number' },
        b: { type: 'number' }
      }
    }
  }
];

client.registerTools(tools);`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-white mb-4">3. Handle Tool Calls</h3>
              <div className="bg-slate-900 rounded-lg p-4 border border-slate-700 overflow-x-auto">
                <pre className="text-sm text-slate-300">
                  <code>{`client.onToolCall('calculator', async (params) => {
  const { operation, a, b } = params;
  
  switch (operation) {
    case 'add':
      return { result: a + b };
    case 'subtract':
      return { result: a - b };
    case 'multiply':
      return { result: a * b };
    case 'divide':
      return { result: a / b };
    default:
      throw new Error('Unknown operation');
  }
});`}</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/api-reference" className="group bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-3">
                <Code className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">API Reference</h3>
              </div>
              <p className="text-slate-300">
                Explore the complete API documentation with all available methods and parameters.
              </p>
            </Link>

            <Link href="/examples" className="group bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center mb-3">
                <Play className="h-6 w-6 text-blue-400 mr-3" />
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400">Examples</h3>
              </div>
              <p className="text-slate-300">
                Check out real-world examples and code samples to inspire your projects.
              </p>
            </Link>
          </div>
        </section>

        {/* Support */}
        <section className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-slate-300 mb-4">
            If you run into any issues or have questions, here are some resources:
          </p>
          <ul className="space-y-2 text-slate-300">
            <li>• Check out our <Link href="/guides" className="text-blue-400 hover:text-blue-300">comprehensive guides</Link></li>
            <li>• Browse the <Link href="/examples" className="text-blue-400 hover:text-blue-300">example projects</Link></li>
            <li>• Join our community Discord server</li>
            <li>• Report issues on GitHub</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
