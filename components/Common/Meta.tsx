import Head from "next/head";

interface MetaDesc {
  title?: string | string[];
  description?: string;
}

const Meta: React.FC<MetaDesc> = ({ title, description = "Feeling Shared, Connection Stay." }) => {
  return (
    <Head>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no,  viewport-fit=cover" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fefefe" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#fefefe" />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title ? `${title} - ` : ""}Stay In Touch</title>
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/static/logo/Stay In Touch Head Logo.png" />
    </Head>
  );
};

export default Meta;
