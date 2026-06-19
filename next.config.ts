import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Lock tracing root to project directory to silence warnings and compile styles correctly
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
