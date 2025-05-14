/** @type {import('next').NextConfig} */
const nextConfig = {
  // Xóa dòng này để cho phép SSR và API Routes hoạt động
  // output: 'export',

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  // Bạn có thể thêm các cấu hình khác của Next.js tại đây nếu cần
};

module.exports = nextConfig;
