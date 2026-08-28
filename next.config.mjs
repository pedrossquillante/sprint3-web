/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/tela-inicial', 
        permanent: true, 
      },
    ]
  },
  reactCompiler: true,
};

export default nextConfig;
