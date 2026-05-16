import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  canonicalPath?: string;
};

function setMeta(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setPropertyMeta(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function setCanonical(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }

  element.setAttribute("href", url);
}

export default function Seo({ title, description, canonicalPath = "/" }: SeoProps) {
  useEffect(() => {
    const siteUrl = "https://ozkayabilisim.com.tr";
    const canonicalUrl = `${siteUrl}${canonicalPath}`;

    document.title = title;

    setMeta("description", description);
    setMeta("robots", "index, follow");

    setPropertyMeta("og:title", title);
    setPropertyMeta("og:description", description);
    setPropertyMeta("og:url", canonicalUrl);
    setPropertyMeta("og:image", `${siteUrl}/images/magaza2.webp`);

    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", `${siteUrl}/images/magaza2.webp`);

    setCanonical(canonicalUrl);
  }, [title, description, canonicalPath]);

  return null;
}