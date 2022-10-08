import { DOMAIN_DXP } from "constants/index";
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";

interface ISEO {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}
function SEO({
  title = "Doanh nhân Dương Xuân Phi",
  description = "Diễn giả Dương Xuân Phi - Người truyền động lực từ những câu chuyện thực. Người theo đuổi ước mơ đến cùng, sẵn sàng đem những kinh nghiệm, tri thức của bản thân để chia sẻ, truyền cảm hứng sống tích cực cho mọi người.",
  image = DOMAIN_DXP + "/dxp/dxp-e76ac04d-33aa-432e-86bc-8a9fb59e37bf.jpeg",
  keywords = "Duongxuanphi, Dien gia Duong Xuan Phi, CEO Duong Xuan Phi, mentor Duong Xuan Phi, doanh nhan Duong Xuan Phi, CEO Uto Tech JSC, jGooooo, Utopia Eco Lodge, Uto Academy",
}: ISEO) {
  const router = useRouter();
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Utopia Eco Lodge - At Home In Wild" />
      <meta property="og:url" content={DOMAIN_DXP + router.asPath} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="Utopia Eco Lodge - At Home In Wild" />
      <meta name="twitter:creator" content="Utopia Eco Lodge - At Home In Wild" />
      <meta name="twitter:image" content={image} />
      <meta property="twitter:url" content={DOMAIN_DXP + router.asPath} />
    </Head>
  );
}

export default SEO;
