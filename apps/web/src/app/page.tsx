import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
          🎬 ViralVibe
        </h1>
        <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4">
          Transform long-form content into viral short-form clips automatically
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          AI-powered video repurposing platform that identifies viral moments, generates dynamic
          clips with animated captions, and optimizes for engagement.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/signup"
            className="px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 rounded-lg font-semibold border-2 border-purple-600 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Identifies viral moments using transcription, speaker detection, and engagement scoring
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">✂️</div>
            <h3 className="text-xl font-semibold mb-2">Auto-Generate Clips</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creates optimized clips with dynamic cropping, animated captions, and visual effects
            </p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Virality Scoring</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Multi-factor analysis of hooks, audio energy, and visual saliency for each clip
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
