module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/cluster",
        destination: "http://127.0.0.1:5000/cluster",
      },
    ];
  },
};
