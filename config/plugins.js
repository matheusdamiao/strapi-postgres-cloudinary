module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-resend",
      providerOptions: {
        apiKey: env("RESEND_API_KEY"),
      },
      settings: {
        defaultFrom: "ti@mcdcontabil.com.br",
        defaultReplyTo: "contato@matheusdamiao.com.br",
      },
    },
  },
});
